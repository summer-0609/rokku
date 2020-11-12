import React from 'react';
import { Icon } from 'rokku';
import { components } from 'site-mobile-demo';
// import './style.less';

export default () => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
      <Icon name="location-o" size={32} />
    <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size={32} />
      </DemoBlock>
      <DemoBlock title="朴素按钮">
      <Icon name="location-o" size={32} color="#2879FF" />
    <Icon name="chat-o" size={32} color="#07c160" />
      </DemoBlock>
      <DemoBlock title="细边框按钮">
      <Icon name="location-o" size="50px" />
    <Icon name="chat-o" size={32} />
      </DemoBlock>
    </DemoSection>
  );
};
