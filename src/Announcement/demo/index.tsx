import React, { useState, useEffect, useRef } from 'react';
import { Announcement } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const adList = [
    {
      mainTitle: '公告测试',
      iphoneUrl: '',
      adDescription: '公告内容',
      subTitle: '',
      linkUrl: '',
      imgUrl: '',
      adId: '',
      beginDate: '',
      endDate: '',
    },
  ];

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Announcement adList={adList} />
      </DemoBlock>
    </DemoSection>
  );
};
