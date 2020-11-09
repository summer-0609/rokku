import execa from 'execa';
import { existsSync } from 'fs';
import { ora } from '../common/logger';
import { join } from 'path';

export async function compileTs() {
  const tsconfigPath = join(process.cwd(), 'tsconfig.json');

  if (!existsSync(tsconfigPath)) {
    return;
  }
  const spinner = ora('TypeScript Checking...\n').start();
  try {
    await execa('tsc', ['--project', tsconfigPath], {
      stdio: 'inherit',
    });

    spinner.succeed('TypeScript Check Success');
  } catch (err) {
    spinner.fail(err.stdout);
    throw err;
  }
}
