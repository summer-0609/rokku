import React, { useState } from 'react';
import { PullRefresh } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      // if (showToast) {
      //   this.$toast(this.t('success'));
      // }
      setRefreshing(false);
      // this.count++;
    }, 1000);
  };

  return (
    <DemoSection>
      <DemoBlock title="基本用法">
        <PullRefresh refreshing={refreshing} onRefresh={onRefresh}>
          下拉刷新
        </PullRefresh>
      </DemoBlock>
    </DemoSection>
  );
};
