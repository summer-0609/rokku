import { join } from 'path';
import { existsSync, readdirSync, pathExistsSync } from 'fs-extra';
import {
  SRC_DIR,
  SITE_MOBILE_COMPONENTS,
  SITE_MODILE_SHARED_FILE,
} from '../common/constant';
import {
  pascalize,
  removeExt,
  decamelize,
  getRokkuConfig,
  smartOutputFile,
  normalizePath,
} from '../common';

type DemoItem = {
  name: string;
  path: string;
  component: string;
};

function genInstall() {
  return `import './package-style';`;
}

function genImports(demos: DemoItem[]) {
  return demos
    .map(
      (item) =>
        `import ${item.name} from '${removeExt(normalizePath(item.path))}';`
    )
    .join('\n');
}

function genExports(demos: DemoItem[]) {
  return `export const demos = {\n  ${demos
    .map((item) => item.name)
    .join(',\n  ')}\n};`;
}

function genDemoImports(demo_components: DemoItem[]) {
  return demo_components
    .map((item) => `import ${item.name} from '${normalizePath(item.path)}';`)
    .join('\n');
}

function genDemoExports(demo_components: DemoItem[]) {
  return `export const components = {\n  ${demo_components
    .map((item) => item.name)
    .join(',\n  ')}\n};`;
}

function genConfig(demos: DemoItem[]) {
  const vantConfig = getRokkuConfig();
  const demoNames = demos.map((item) => decamelize(item.name));

  function demoFilter(nav: any[]) {
    return nav.filter((group) => {
      group.items = group.items.filter((item: any) =>
        demoNames.includes(item.path)
      );
      return group.items.length;
    });
  }

  const { nav, locales } = vantConfig.site;
  if (locales) {
    Object.keys(locales).forEach((lang: string) => {
      if (locales[lang].nav) {
        locales[lang].nav = demoFilter(locales[lang].nav);
      }
    });
  } else if (nav) {
    vantConfig.site.nav = demoFilter(nav);
  }

  return `export const config = ${JSON.stringify(vantConfig, null, 2)}`;
}

function genCode(components: string[]) {
  const demos = components
    .map((component) => ({
      component,
      name: pascalize(component),
      path: join(SRC_DIR, component, 'demo/index.tsx'),
    }))
    .filter((item) => existsSync(item.path));

  const demoComponents = ['DemoBlock', 'DemoSection']
    .map((component) => ({
      component,
      name: pascalize(component),
      path: join(SITE_MOBILE_COMPONENTS, component),
    }))
    .filter((item) => pathExistsSync(item.path));

  return `${genInstall()}
 ${genImports(demos)}
 ${genDemoImports(demoComponents)}
 ${genExports(demos)}
 ${genDemoExports(demoComponents)}
 ${genConfig(demos)}
`;
}

export function genSiteMobileShared() {
  const dirs = readdirSync(SRC_DIR);
  const code = genCode(dirs);

  smartOutputFile(SITE_MODILE_SHARED_FILE, code);
}
