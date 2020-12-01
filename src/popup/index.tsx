import React, { useMemo, useState, useEffect } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import Icon from '../icon';
import Overlay from '../overlay';
import { createNamespace, isDef } from '../utils';
import { PopupProps } from './PropsType';

const [bem] = createNamespace('popup');

const Popup: React.FC<PopupProps> = (props) => {
  const {
    round,
    visible,
    closeable,
    children,
    duration = 300,
    closeIcon = 'cross',
    position = 'center',
  } = props;

  const [zIndex] = useState<number>(2000);
  const [animatedVisible, setAnimatedVisible] = useState(visible);

  useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);

  const renderOverlay = () => {
    const { overlay = true, overlayClosable = true, onClickOverlay, onClose } = props;

    if (overlay) {
      return (
        <Overlay
          show={visible}
          className={props.overlayClass}
          style={props.overlayStyle}
          zIndex={zIndex}
          duration={props.duration}
          onClick={() => {
            if (onClickOverlay && typeof onClickOverlay === 'function') {
              onClickOverlay();
            }
            if (overlayClosable) {
              onClose();
            }
          }}
        />
      );
    }
    return null;
  };

  const style = useMemo(() => {
    const initStyle = {
      zIndex,
      ...props.style,
    };

    if (isDef(duration)) {
      const key = props.position === 'center' ? 'animationDuration' : 'transitionDuration';
      initStyle[key] = `${duration}ms`;
    }
    return initStyle;
  }, [zIndex]);

  const renderCloseIcon = () => {
    if (closeable) {
      const { closeIconPosition = 'top-right' } = props;
      return (
        <Icon
          name={closeIcon}
          className={classnames(bem('close-icon', closeIconPosition))}
          // onClick={onClickCloseIcon}
        />
      );
    }
    return null;
  };

  const renderTransition = () => {
    const { transition, destroyOnClose = false, forceRender = false, safeAreaInsetBottom } = props;
    const name = position === 'center' ? 'rk-fade' : `rk-popup-slide-${position}`;

    return (
      <CSSTransition
        in={visible}
        timeout={duration}
        classNames={transition || name}
        mountOnEnter={!forceRender}
        unmountOnExit={destroyOnClose}
        onExited={() => setAnimatedVisible(false)}
      >
        <div
          style={{ ...style, display: !animatedVisible && 'none' }}
          className={classnames(
            bem({
              round,
              [position]: position,
              'safe-area-inset-bottom': safeAreaInsetBottom,
            }),
            props.className,
          )}
        >
          {children}
          {renderCloseIcon()}
        </div>
      </CSSTransition>
    );
  };

  return (
    <div>
      {renderOverlay()}
      {renderTransition()}
    </div>
  );
};

Popup.defaultProps = {
  position: 'center',
};

export default Popup;
