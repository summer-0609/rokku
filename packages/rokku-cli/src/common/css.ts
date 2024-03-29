import { get } from 'lodash';
import { existsSync } from 'fs';
import { join, isAbsolute } from 'path';
import { getRokkuConfig } from '.';
import { STYLE_DIR, SRC_DIR } from './constant';

type CSSLANG = 'css' | 'less' | 'scss';

function getCssLang(): CSSLANG {
  const vantConfig = getRokkuConfig();
  const preprocessor = get(vantConfig, 'build.css.preprocessor', 'less');

  if (preprocessor === 'sass') {
    return 'scss';
  }

  return preprocessor;
}

export const CSS_LANG = getCssLang();

export function getCssBaseFile() {
  const rokkuConfig = getRokkuConfig();
  let path = join(STYLE_DIR, `base.${CSS_LANG}`);

  const baseFile = get(rokkuConfig, 'build.css.base', '');
  if (baseFile) {
    path = isAbsolute(baseFile) ? baseFile : join(SRC_DIR, baseFile);
  }
  if (existsSync(path)) {
    return path;
  }

  return null;
}

const IMPORT_STYLE_RE = /import\s+?(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

// "import 'a.less';" => "import 'a.css';"
export function replaceCssImport(code: string) {
  return code.replace(IMPORT_STYLE_RE, (str) =>
    str.replace(`.${CSS_LANG}`, '.css')
  );
}
