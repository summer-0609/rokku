import React from 'react';
import { Empty } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock>
        <Empty
          image="http://47.116.3.37/image/empty.png"
          description="描述文字"
          className="custom-empty"
        />
      </DemoBlock>
    </DemoSection>
  );
};
