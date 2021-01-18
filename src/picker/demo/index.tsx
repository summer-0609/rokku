import React from 'react';
import { Picker } from 'rokku';
import { components } from 'site-mobile-demo';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Picker columns={columns} />
      </DemoBlock>
      <DemoBlock card title="默认选中">
        <Picker columns={columns} defaultIndex="2" />
      </DemoBlock>
    </DemoSection>
  );
};
