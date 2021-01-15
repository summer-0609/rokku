import React, { useReducer } from 'react';
import { Cell,Complain,Toast} from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

const initialState = {
  showComplain: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'showBasic':
      return { ...state, showComplain: !state.showComplain };
    default:
      throw new Error();
  }
}

export default (): React.ReactNode => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock card title="问题申诉">
        <Cell
          title="问题申诉"
          isLink
          onClick={() =>
            dispatch({
              type: 'showBasic',
            })
          }
        />
      </DemoBlock>
      <Complain
        title="问题申诉"
        description='给您带来不便，我们深感抱歉，请选择问题原因'
        resourceList={[
          '座位被占，沟通无结果',
          '车辆临时换车，座位被占',
          '车辆车型与下单不一致',
          '其他问题',
        ]}
        buttonName='提交申诉'
        show={state.showComplain}
        onClick={()=>{
          if (!state.chooseResource) {
            Toast('请选择申诉原因');
            return;
          }
          dispatch({
            type: 'showBasic',
          })
        }}
        onClose={() =>
          dispatch({
            type: 'showBasic',
          })
        }
      />
    </DemoSection>
  );
};
