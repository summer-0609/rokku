import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';
import Overlay from '../overlay';
import usePortal from '../hooks/use-portal';

import { createNamespace } from '../utils';
import { PopupProps } from './PropsType';

const [bem] = createNamespace('popup');

const Popup: React.FC<PopupProps> = (props) => {
  const { round, visible, closeable, closeIcon = 'cross', children } = props;
  const [Portal] = usePortal(props);

  const renderOverlay = () => {
    const { overlay = true, overlayClosable = true, onClickOverlay, onClose } = props;
    if (overlay) {
      return (
        <Overlay
          show={props.visible}
          className={props.overlayClass}
          style={props.overlayStyle}
          // zIndex={zIndex.value}
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

  return (
    <Portal visible={visible}>
      {renderOverlay()}
      <CSSTransition in={visible} timeout={300} classNames="rk-fade" mountOnEnter unmountOnExit>
        <div
          className={classnames(
            bem({
              round,
              // [position]: position,
              // 'safe-area-inset-bottom': safeAreaInsetBottom,
            }),
          )}
        >
          {children}
          <Icon name={closeIcon} className={classnames(bem('close-icon'))} />
          {closeable && <Icon name={closeIcon} className={classnames(bem('close-icon'))} />}
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Popup;
