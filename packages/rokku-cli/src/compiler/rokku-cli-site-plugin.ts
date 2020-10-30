import { Compiler } from 'webpack';
import { genSiteMobileShared } from './gen-site-mobile-shared';
import { genSiteDesktopShared } from './gen-site-desktop-shared';

const PLUGIN_NAME = 'RokkuCliSitePlugin';

async function genSiteEntry() {
  genSiteMobileShared();
  genSiteDesktopShared();
}

export class RokkuCliSitePlugin {
  apply(compiler: Compiler) {
    if (process.env.NODE_ENV === 'production') {
      compiler.hooks.beforeCompile.tapPromise(PLUGIN_NAME, genSiteEntry);
    } else {
      compiler.hooks.watchRun.tapPromise(PLUGIN_NAME, genSiteEntry);
    }
  }
}
