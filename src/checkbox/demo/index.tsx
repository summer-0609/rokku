import React from 'react';
import { Cell, Checkbox } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Checkbox checked>复选框</Checkbox>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Checkbox checked disabled>
          复选框
        </Checkbox>
        <Checkbox checked={false} disabled>
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义形状">
        <Checkbox checked shape="square">
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Checkbox checked checkedColor="#ee0a24">
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Checkbox checked iconSize="24px">
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="禁止文本点击">
        <Checkbox checked labelDisabled>
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="复选框组">
        <Checkbox.Group initChecked={['a', 'b']}>
          <Checkbox name="a">复选框a</Checkbox>
          <Checkbox name="b">复选框b</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="水平排列">
        <Checkbox.Group initChecked={[]} direction="horizontal">
          <Checkbox name="a">复选框a</Checkbox>
          <Checkbox name="b">复选框b</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="限制最大可选数">
        <Checkbox.Group initChecked={[]} max={2}>
          <Checkbox name="a">复选框a</Checkbox>
          <Checkbox name="b">复选框b</Checkbox>
          <Checkbox name="c">复选框c</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="限制最大可选数">
        <Checkbox.Group initChecked={[]} max={2}>
          <Cell.Group>
            <Cell title="单选框1" icon="shop-o" rightIconSlot={() => <Checkbox name="a" />} />
            <Cell title="单选框2" icon="shop-o" rightIconSlot={() => <Checkbox name="b" />} />
          </Cell.Group>
        </Checkbox.Group>
      </DemoBlock>
    </DemoSection>
  );
};
