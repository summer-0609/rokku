#!/usr/bin/env node
import { command, parse, version } from 'commander';
// @ts-ignore
import packageJson from '../package.json';
// commands
import { dev } from './commands/dev';
import { build } from './commands/build';
import { test } from './commands/jest';
import { lint } from './commands/lint';
import { buildSite } from './commands/build-site';

version(`@rokku/cli ${packageJson.version}`);

command('dev').description('Run webpack dev server').action(dev);

// 打包文档
command('build-site')
  .description('Compile site in production mode')
  .action(buildSite);

// eslint & stylelint
command('lint').description('Run eslint and stylelint').action(lint);

// 打包组件库
command('build')
  .description('Compile components in production mode')
  .option('--watch', 'Watch file change')
  .action(build);

// 组件测试
command('test')
  .description('Run unit tests through jest')
  .option(
    '--watch',
    'Watch files for changes and rerun tests related to changed files'
  )
  .option(
    '--coverage',
    'Indicates that test coverage information should be collected and reported in the output'
  )
  .option(
    '--clearCache',
    'Clears the configured Jest cache directory and then exits'
  )
  .action(test);

parse(process.argv);
