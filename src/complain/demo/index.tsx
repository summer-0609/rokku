import React, { useReducer } from 'react';
import { Cell,Complain} from 'rokku';
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
        show={state.showComplain}
        onClick={()=>{
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
