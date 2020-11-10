/**
 * title: 图标大小
 * desc: 组件`Icon`的`size` 属性用来设置图标的大小, 默认单位为`px`
 */

import React from 'react';
import { Icon } from 'rokku';

export default () => (
  <>
    <Icon name="location-o" size="50px" />
    <Icon name="chat-o" size={32} />
  </>
);
