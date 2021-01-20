import React from 'react';
import { PasswordInput, Dialog } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

const Component = () => {
  const { DemoBlock, DemoSection } = components;
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <PasswordInput value="12a" length={4} type="text" onSubmit={onSubmit} />
      </DemoBlock>

      <DemoBlock title="限制长度">
        <PasswordInput type="text" length={6} onSubmit={onSubmit} />
      </DemoBlock>

      <DemoBlock title="只允许数字">
        <PasswordInput
          value="123"
          mask={false}
          length={4}
          validator={(val: string) => {
            return /^\d{0,4}$/.test(val);
          }}
          onSubmit={onSubmit}
        />
      </DemoBlock>

      <DemoBlock title="自动聚焦">
        <PasswordInput
          length={4}
          autoFocus
          validator={(val: string) => {
            return /^\d{0,4}$/.test(val);
          }}
          onSubmit={onSubmit}
        />
      </DemoBlock>
    </DemoSection>
  );
};

export default Component;
