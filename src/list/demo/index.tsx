import React, { useState } from 'react';
import { Tabs, List, Cell } from 'rokku';
import { components } from 'site-mobile-demo';

import './style.less';

export default (): React.ReactNode => {
  const { DemoSection } = components;

  const [list, setList] = useState<Array<number>>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  const onLoad = () => {
    setLoading(true);

    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
      for (let i = 0; i < 10; i += 1) {
        list.push(list.length + 1);
      }
      setList(list);

      // 加载状态结束
      setLoading(false);

      // 数据全部加载完成
      if (list.length >= 40) {
        setFinished(true);
      }
    }, 1000);
  };

  return (
    <DemoSection>
      <Tabs sticky>
        <Tabs.TabPane title="基本用法">
          <List loading={loading} finished={finished} onLoad={onLoad}>
            {list.length
              ? list.map((item) => {
                  return <Cell key={item} title={item} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title="错误提示">
          <List
            loading={loading}
            error={error}
            errorText="请求失败，点击重新加载"
            onLoad={() => {
              console.log(4);
            }}
          >
            {/* {list.length
              ? list.map((item) => {
                  return <Cell key={item} title={item} />;
                })
              : null} */}
          </List>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
