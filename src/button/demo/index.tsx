import React from 'react';
import { Button } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default () => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <div className="demo-button-row">
          <Button type="primary">主要按钮</Button>
          <Button type="info">信息按钮</Button>
          <Button type="default">默认按钮</Button>
        </div>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
      </DemoBlock>
      <DemoBlock title="朴素按钮">
        <Button plain type="primary">
          朴素按钮
        </Button>
        <Button plain type="info">
          朴素按钮
        </Button>
      </DemoBlock>
      <DemoBlock title="细边框按钮">
        <Button plain hairline type="primary">
          细边框按钮
        </Button>
        <Button plain hairline type="info">
          细边框按钮
        </Button>
      </DemoBlock>
    </DemoSection>
  );
};
