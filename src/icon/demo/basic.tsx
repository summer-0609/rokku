/**
 * title: 基础用法
 * desc: 组件`Icon` 的`name`属性支持传入`图标名称`或`图片链接`，所有可用的图标名称见下图
 */

import React from 'react';
import { Icon } from 'rokku';

export default (): React.ReactNode => (
  <>
    <Icon name="location-o" size={32} />
    <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size={32} />
  </>
);
