import React, { useState } from 'react';
import classnames from 'classnames';

import { ComplainProps } from './PropsType';
import { createNamespace } from '../utils';

import Popup from '../popup';
import Button from '../button';

const [bem] = createNamespace('complain');

const Complain: React.FC<ComplainProps> = (props) => {
  const {
    onClick,
    onClose,
    resourceList,
    show,
    title,
    description,
    closeIcon,
    noChooseIcon = 'https://image.chebada.com/image/touch/regularexpressbus/icon_danxuan_nor@2x.png',
    chooseIcon = 'https://image.chebada.com/image/touch/regularexpressbus/icon_danxuan_pre@2x.png',
    className,
    buttonName
  } = props;

  const [state, setState] = useState({
    chooseResource: '',
  });

  const renderTitle = () => {
    return (
      <div className={classnames(bem('title-info'))}>
        <p className={classnames(bem('title'))}>{title}</p>
        <p className={classnames(bem('tip'))}>{description}</p>
      </div>
    );
  };
  const renderResourceList = () => {
    return (
      <div className={classnames(bem('resource'))}>
        {resourceList &&
          resourceList.length > 0 &&
          resourceList.map((item: string, index) => {
            return (
              <div
                className={classnames(bem('list'))}
                key={index as number}
                onClick={() => {
                  setState({
                    chooseResource: item
                  });
                }}
              >
                <div className={classnames(bem('line'))}>{item}</div>
                <img
                  className={classnames(bem('icon'))}
                  alt=""
                  src={state.chooseResource === item ? chooseIcon : noChooseIcon}
                />
              </div>
            );
          })}
      </div>
    );
  };
  const renderButtons = () => {
    return (
      <div className={classnames(bem('button'))}>
        <Button
          type="primary"
          block
          onClick={async () => {
            await onClick(state.chooseResource);
            setState({
              chooseResource: '',
            });
          }}
        >
          {buttonName}
        </Button>
      </div>
    );
  };
  return (
    <Popup
      visible={show}
      round
      overlayClosable
      closeable
      position="bottom"
      closeIcon={closeIcon}
      onClose={() => {
        setState({
          chooseResource: '',
        });
        onClose();
      }}
    >
      <div className={classnames(bem(), className)}>
        <div className={classnames(bem('content'))}>
          {renderTitle()}
          {renderResourceList()}
        </div>
        {renderButtons()}
      </div>
    </Popup>
  );
};

Complain.defaultProps = {
  title: '问题申诉',
  description: '给您带来不便，我们深感抱歉，请选择问题原因',
  buttonName:'提交申诉',
  resourceList: [
    '座位被占，沟通无结果',
    '车辆临时换车，座位被占',
    '车辆车型与下单不一致',
    '其他问题',
  ]
}

export default Complain;
