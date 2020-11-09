import { join, relative } from 'path';
import { remove, copy, readdirSync } from 'fs-extra';
import { clean } from './clean';
import { compileJs } from '../compiler/compile-js';
import { compileStyle } from '../compiler/compile-style';
import { ora, consola, slimPath } from '../common/logger';
import { installDependencies } from '../common/manager';
import { SRC_DIR, LIB_DIR, ES_DIR } from '../common/constant';
import { compileTs } from '../compiler/compile-ts'
import {
  isDir,
  isStyle,
  isScript,
  isDemoDir,
  isTestDir,
  setNodeEnv,
  setModuleEnv,
} from '../common';

async function compileFile(filePath: string) {
  if (isScript(filePath)) {
    return compileJs(filePath);
  }
  if (isStyle(filePath)) {
    return compileStyle(filePath);
  }
  return remove(filePath);
}

async function compileDir(dir: string) {
  const files = readdirSync(dir);

  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename);

      if (isDemoDir(filePath) || isTestDir(filePath)) {
        return remove(filePath);
      }

      if (isDir(filePath)) {
        return compileDir(filePath);
      }

      return compileFile(filePath);
    })
  );
}

async function buildEs() {
  setModuleEnv('esmodule');
  await copy(SRC_DIR, ES_DIR);
  await compileDir(ES_DIR);
}

const tasks = [
  {
    text: 'Build ESModule Outputs',
    task: buildEs,
  },
  // {
  //   text: 'Build Commonjs Outputs',
  //   task: buildLib,
  // },
  // {
  //   text: 'Build Style Entry',
  //   task: buildStyleEntry,
  // },
  // {
  //   text: 'Build Package Entry',
  //   task: buildPacakgeEntry,
  // },
  // {
  //   text: 'Build Packed Outputs',
  //   task: buildPackages,
  // },
];

async function runBuildTasks() {
  for (let i = 0; i < tasks.length; i++) {
    const { task, text } = tasks[i];
    const spinner = ora(text).start();
    console.log('\n');
    try {
      /* eslint-disable no-await-in-loop */
      await task();
      spinner.succeed(text);
    } catch (err) {
      spinner.fail(text);
      throw err;
    }
  }

  consola.success('Compile successfully');
}

export async function build(cmd: { watch?: boolean } = {}) {
  setNodeEnv('production');

  try {
    await clean();
    await installDependencies();
    await compileTs();
    await runBuildTasks();

    // if (cmd.watch) {
    //   watchFileChange();
    // }
  } catch (err) {
    consola.error('Build failed');
    process.exit(1);
  }
}
