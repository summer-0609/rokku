import React from 'react';
import { NoticeBar } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock card title="滚动播放">
        <NoticeBar
          leftIcon="volume-o"
          background="rgb(236, 249, 255)"
          color="rgb(25, 137, 250)"
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
          scrollable
        />
      </DemoBlock>
    </DemoSection>
  );
};
