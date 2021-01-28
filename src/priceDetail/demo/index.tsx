import React, { useReducer } from 'react';
import { Cell, PriceDetail, Toast } from 'rokku';
import { components } from 'site-mobile-demo';
import './style.less';

const initialState = {
  showPriceDetail: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'showBasic':
      return { ...state, showPriceDetail: !state.showPriceDetail };
    default:
      throw new Error();
  }
}

export default (): React.ReactNode => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock card title="价格详情">
        <Cell
          title="价格详情"
          isLink
          onClick={() =>
            dispatch({
              type: 'showBasic',
            })
          }
        />
      </DemoBlock>
      <PriceDetail
        title="价格详情"
        description="服务费包含技术服务费、信息服务费等费用；如出票失败，自动退还至原支付账户"
        resourceList={[
          '座位被占，沟通无结果',
          '车辆临时换车，座位被占',
          '车辆车型与下单不一致',
          '其他问题',
        ]}
        show={state.showPriceDetail}
        onClose={() =>
          dispatch({
            type: 'showBasic',
          })
        }
      />
    </DemoSection>
  );
};
