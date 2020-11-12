import { existsSync, statSync } from 'fs';
import { join, extname } from 'path';
import { SRC_DIR, ROOT } from '../common/constant';
import { getComponents } from '../common';
import { genComponentStyle } from './gen-component-style';
import { compileJs } from './compile-js';

import vfs from 'vinyl-fs';
import through2 from 'through2';
import signale from 'signale';
import chalk from 'chalk';
import lodash from 'lodash';
import slash from 'slash2';
import gulpIf from 'gulp-if';
import gulpLess from 'gulp-less';
import chokidar from 'chokidar';
import gulpSass from 'gulp-sass';
import gulpPlumber from 'gulp-plumber';
import gulpTs from 'gulp-typescript';

interface ICompileOpts {
  type: 'esm' | 'cjs';
  targetPath: string;
  watch?: boolean;
}

export default async function(options: ICompileOpts) {
  const { type, targetPath, watch } = options;
  const components = getComponents();

  function getTSConfig() {
    const tsconfigPath = join(process.cwd(), 'tsconfig.json');
    if (!existsSync(tsconfigPath)) {
      return {};
    }
    return tsconfigPath;
  }

  function createStream(src: string[]) {
    const tsConfig = getTSConfig();

    function isTsFile(path: string) {
      return /\.tsx?$/.test(path) && !path.endsWith('.d.ts');
    }

    function isTransform(path: string) {
      return /\.(t|j)sx?$/.test(path) && !path.endsWith('.d.ts');
    }

    function isComponent(path: string) {
      return (
        /\/index.(t|j)sx?$/.test(path) &&
        components.some(o => path.indexOf(o) !== -1)
      );
    }

    return vfs
      .src(src, {
        allowEmpty: true,
        base: SRC_DIR
      })
      .pipe(watch ? gulpPlumber() : through2.obj())
      .pipe(gulpIf(f => isTsFile(f.path), gulpTs(tsConfig)))
      .pipe(gulpIf(f => /\.less$/.test(f.path), gulpLess({})))
      .pipe(gulpIf(f => /\.scss$/.test(f.path), gulpSass({})))
      .pipe(
        gulpIf(
          f => isTransform(f.path),
          through2.obj((file, env, cb) => {
            try {
              file.contents = Buffer.from(compileJs({ file, type }));
              // .jsx -> .js
              file.path = file.path.replace(extname(file.path), '.js');
              cb(null, file);
            } catch (e) {
              signale.error(`Compiled faild: ${file.path}`);
              console.log(e);
              cb(null);
            }
          })
        )
      )
      .pipe(
        gulpIf(
          f => isComponent(slash(f.path)),
          through2.obj((file, env, cb) => {
            const paths = slash(file.path).split('/');
            const target = paths[paths.length - 2];
            genComponentStyle(target);
            cb(null, file);
          })
        )
      )
      .pipe(vfs.dest(targetPath));
  }

  return new Promise(resolve => {
    const patterns = [
      join(SRC_DIR, '**/*'),
      `!${join(SRC_DIR, '**/demo{,/**}')}`,
      `!${join(SRC_DIR, '**/__test__{,/**}')}`,
      `!${join(SRC_DIR, '**/*.md')}`,
      `!${join(SRC_DIR, '**/*.+(test|e2e|spec).+(js|jsx|ts|tsx)')}`
    ];
    createStream(patterns).on('end', () => {
      if (watch) {
        console.log(
          chalk.magenta(
            `Start watching ${slash(SRC_DIR).replace(
              `${ROOT}/`,
              ''
            )} directory...`
          )
        );
        const watcher = chokidar.watch(SRC_DIR, {
          ignoreInitial: true
        });

        const files = [];
        function compileFiles() {
          while (files.length) {
            createStream(files.pop());
          }
        }

        const debouncedCompileFiles = lodash.debounce(compileFiles, 1000);
        watcher.on('all', (event, fullPath) => {
          console.log(99899);
          const relPath = fullPath.replace(SRC_DIR, '');
          console.log(
            `[${event}] ${slash(join(SRC_DIR, relPath)).replace(
              `${ROOT}/`,
              ''
            )}`
          );
          if (!existsSync(fullPath)) return;
          if (statSync(fullPath).isFile()) {
            if (!files.includes(fullPath)) files.push(fullPath);
            debouncedCompileFiles();
          }
        });
        process.once('SIGINT', () => {
          watcher.close();
        });
      }
      resolve(1);
    });
  });
}
