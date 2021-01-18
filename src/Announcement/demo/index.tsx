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

  const adList2 = [
    {
      mainTitle: '弹框链接',
      iphoneUrl: '',
      adDescription: '公告内容',
      subTitle: '',
      linkUrl: 'https://baidu.com',
      imgUrl: '',
      adId: '',
      beginDate: '',
      endDate: '',
    },
  ];

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Announcement leftIcon="volume-o" adList={adList} />
      </DemoBlock>

      <DemoBlock title="弹框链接">
        <Announcement
          leftIcon={
            <div style={{ width: '24px', height: '16px' }}>
              <img
                alt=""
                style={{ width: '16px' }}
                src="https://image.chebada.com/image/comman/upload/merchantAdPic/2020/07/07/0c884c7f02c0757e69143ccab1aeec9c.png"
              />
            </div>
          }
          adList={adList2}
        />
      </DemoBlock>

      <DemoBlock title="链接">
        <Announcement mode="link" adList={adList2} />
      </DemoBlock>
    </DemoSection>
  );
};
