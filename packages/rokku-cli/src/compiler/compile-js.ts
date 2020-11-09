import { transformAsync } from '@babel/core';
import { readFileSync, removeSync, outputFileSync } from 'fs-extra';
import { replaceExt } from '../common';
import { consola } from '../common/logger';
import chalk from 'chalk';

export function compileJs(filePath: string): Promise<undefined> {
  return new Promise(async (resolve, reject) => {
    const env = {
      esmodule: 'es',
      commonjs: 'cjs',
    }[process.env.BABEL_MODULE];

    let code = readFileSync(filePath, 'utf-8');

    consola.log(`Transform to ${env} for ${chalk.yellow(filePath)}`);

    transformAsync(code, { filename: filePath })
      .then((result) => {
        if (result) {
          const jsFilePath = replaceExt(filePath, '.js');

          removeSync(filePath);
          outputFileSync(jsFilePath, result.code);
          resolve();
        }
      })
      .catch(reject);
  });
}
