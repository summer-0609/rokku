/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from 'react';
import { Icon } from 'rokku';
import classnames from 'classnames';
import { NoticeBarPropsType } from './PropsType';
import { createNamespace } from '../utils';
import { useRect } from '../hooks/use-rect';

export interface NoticeBarProps extends NoticeBarPropsType {
  onClick?: (e: Event) => void;
  className?: string;
  style?: React.CSSProperties;
}

const [bem] = createNamespace('notice-bar');

const NoticeBar: React.FC<NoticeBarProps> = (props) => {
  const { text, color, background, leftIcon, scrollable, wrapable, speed = 50, delay = 1 } = props;

  // 元素宽高
  const [elState, elSetState] = useState({
    wrapWidth: 0,
    contentWidth: 0,
  });

  const [state, setState] = useState({
    offset: 0,
    duration: 0,
  });

  const wrapRef = useRef();
  const contentRef = useRef();

  //  动画结束
  const onTransitionEnd = () => {
    const { wrapWidth, contentWidth } = elState;
    setState({
      offset: wrapWidth,
      duration: 0,
    });

    setTimeout(() => {
      setState({
        offset: -contentWidth,
        duration: (contentWidth + wrapWidth) / speed,
      });
    });
  };

  //  左侧图标
  const renderLeftIcon = () => {
    return <Icon className={bem('left-icon')} name={leftIcon} />;
  };

  //  文字部分
  const renderMarquee = () => {
    const ellipsis = !scrollable && !wrapable;
    const style = {
      transform: state.offset ? `translateX(${state.offset}px)` : '',
      transitionDuration: `${state.duration}s`,
    };

    return (
      <div className={classnames(bem('wrap'))} ref={wrapRef}>
        <div
          className={classnames(bem('content'), {
            ellipsis,
          })}
          ref={contentRef}
          style={style}
          onTransitionEnd={onTransitionEnd}
        >
          {text}
        </div>
      </div>
    );
  };

  // const reset = () => {
  //   setState({
  //     offset: 0,
  //     duration: 0
  //   });
  // };

  //  开始动画
  const start = () => {
    const ms = delay ? delay * 1000 : 0;
    const wrapEl = useRect(wrapRef.current);
    const contentEl = useRect(contentRef.current);
    setTimeout(() => {
      elSetState({
        wrapWidth: wrapEl.width,
        contentWidth: contentEl.width,
      });
      setState({
        offset: -contentEl.width,
        duration: contentEl.width / speed,
      });
    }, ms);
  };

  useEffect(() => {
    if (text) {
      start();
    }
  }, [contentRef]);

  return (
    <div className={classnames(bem({ wrapable }))} style={{ color, background }}>
      {renderLeftIcon()}
      {renderMarquee()}
    </div>
  );
};

export default NoticeBar;
