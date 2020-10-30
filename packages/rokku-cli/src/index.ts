#!/usr/bin/env node
import { command, parse, version } from 'commander';
// @ts-ignore
import packageJson from '../package.json';
// commands
import { dev } from './commands/dev';
import { buildSite } from './commands/build-site';

version(`@rokku/cli ${packageJson.version}`);

command('dev').description('Run webpack dev server').action(dev);

command('build-site')
  .description('Compile site in production mode')
  .action(buildSite);

parse(process.argv);
