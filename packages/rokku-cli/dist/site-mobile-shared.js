
 import Button from 'D:/MyConfiguration/tian.xia/Desktop/rokku/src/button/demo/index.tsx';
import Flex from 'D:/MyConfiguration/tian.xia/Desktop/rokku/src/flex/demo/index.tsx';
 import DemoBlock from 'D:/MyConfiguration/tian.xia/Desktop/rokku/packages/rokku-cli/site/mobile/components/DemoBlock';
import DemoSection from 'D:/MyConfiguration/tian.xia/Desktop/rokku/packages/rokku-cli/site/mobile/components/DemoSection';
 export const demos = {
  Button,
  Flex
};
 export const components = {
  DemoBlock,
  DemoSection
};
 export const config = {
  "name": "Rokku",
  "build": {
    "css": {
      "preprocessor": "less"
    },
    "site": {
      "publicPath": "./"
    }
  },
  "site": {
    "defaultLang": "zh-CN",
    "locales": {
      "zh-CN": {
        "title": "Rokku",
        "description": "轻量、可靠的移动端 React 组件库",
        "logo": "http://qjkmoyomo.hd-bkt.clouddn.com/logo.png",
        "langLabel": "中文",
        "links": [
          {
            "logo": "http://qjkmoyomo.hd-bkt.clouddn.com/github.png",
            "url": "https://github.com/Hyattria/rokku"
          }
        ],
        "searchConfig": {
          "apiKey": "90067aecdaa2c85220e2783cd305caac",
          "indexName": "vant",
          "placeholder": "搜索文档..."
        },
        "nav": [
          {
            "title": "基础组件",
            "items": [
              {
                "path": "button",
                "title": "Button 按钮"
              }
            ]
          },
          {
            "title": "布局组件",
            "items": [
              {
                "path": "flex",
                "title": "Flex 布局"
              }
            ]
          }
        ]
      },
      "en-US": {
        "title": "Rokku",
        "description": "Mobile UI Components built on React",
        "logo": "http://qjkmoyomo.hd-bkt.clouddn.com/logo.png",
        "langLabel": "En",
        "links": [
          {
            "logo": "http://qjkmoyomo.hd-bkt.clouddn.com/github.png",
            "url": "https://github.com/Hyattria/rokku"
          }
        ],
        "searchConfig": {
          "apiKey": "90067aecdaa2c85220e2783cd305caac",
          "indexName": "vant",
          "placeholder": "Search..."
        },
        "nav": [
          {
            "title": "Basic Components",
            "items": [
              {
                "path": "button",
                "title": "Button"
              }
            ]
          }
        ]
      }
    }
  }
}