import React from 'react';
import classnames from 'classnames';
import { PullRefreshProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('pull-refresh');

const DEFAULT_HEAD_HEIGHT = 50;
// const TEXT_STATUS = ['pulling', 'loosing', 'success'];

const PullRefresh: React.FC<PullRefreshProps> = (props) => {
  const getHeadStyle = () => {
    if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
      return {
        height: `${props.headHeight}px`,
      };
    }
    return null;
  };

  return (
    <div className={classnames(bem())}>
      <div
        className={classnames(bem('track'))}
        // style={trackStyle}
        // onTouchstart={onTouchStart}
        // onTouchmove={onTouchMove}
        // onTouchend={onTouchEnd}
        // onTouchcancel={onTouchEnd}
      >
        <div className={classnames(bem('head'))} style={getHeadStyle()}>
          {/* {renderStatus()} */}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default PullRefresh;
