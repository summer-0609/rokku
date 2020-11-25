import React, { useReducer } from 'react';
import { Popup, Button } from 'rokku';
import { components } from 'site-mobile-demo';
// import './style.less';

const initialState = { showBasic: false };

function reducer(state, action) {
  switch (action.type) {
    case 'showBasic':
      return { showBasic: !state.showBasic };
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
          1232123
        </Popup>
      </DemoBlock>
    </DemoSection>
  );
};
