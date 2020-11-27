import React, { useReducer } from 'react';
import { Popup, Button } from 'rokku';
import { components } from 'site-mobile-demo';
// import './style.less';

const initialState = { showBasic: false, showTop: false, showBottom: false };

function reducer(state, action) {
  switch (action.type) {
    case 'showBasic':
      return { ...state, showBasic: !state.showBasic };
    case 'showTop':
      return { ...state, showTop: !state.showTop };
    case 'showBottom':
      return { ...state, showBottom: !state.showBottom };
    default:
      throw new Error();
  }
}

export default (): React.ReactNode => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { DemoBlock, DemoSection } = components;

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Button
          onClick={() =>
            dispatch({
              type: 'showBasic',
            })
          }
        >
          测试
        </Button>
        <Popup
          visible={state.showBasic}
          onClose={() =>
            dispatch({
              type: 'showBasic',
            })
          }
        >
          <div style={{ padding: '30px 50px' }}>内容</div>
        </Popup>
      </DemoBlock>
      <DemoBlock title="弹出位置">
        <Button
          onClick={() =>
            dispatch({
              type: 'showTop',
            })
          }
        >
          顶部弹出
        </Button>
        <Button
          onClick={() =>
            dispatch({
              type: 'showBottom',
            })
          }
        >
          底部弹出
        </Button>
        <Popup
          visible={state.showTop}
          style={{ height: '30%' }}
          position="top"
          onClose={() =>
            dispatch({
              type: 'showTop',
            })
          }
        />
        <Popup
          visible={state.showBottom}
          style={{ height: '30%' }}
          position="bottom"
          onClose={() =>
            dispatch({
              type: 'showBottom',
            })
          }
        />
      </DemoBlock>
    </DemoSection>
  );
};
