import React, { useState } from 'react';
import classnames from 'classnames';

import { ComplainProps } from './PropsType';
import { createNamespace } from '../utils';

import Popup from '../popup';
import Button from '../button';
import Radio from '../radio';

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
    className,
    buttonName,
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
                    chooseResource: item,
                  });
                }}
              >
                <div className={classnames(bem('line'))}>{item}</div>
                <Radio
                  className={classnames(bem('icon'))}
                  checked={state.chooseResource === item}
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

export default Complain;
