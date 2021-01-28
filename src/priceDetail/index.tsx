import React, { useState } from 'react';
import classnames from 'classnames';

import { PriceDetailProps } from './PropsType';
import { createNamespace } from '../utils';

import Popup from '../popup';

const [bem] = createNamespace('priceDetail');

const PriceDetail: React.FC<PriceDetailProps> = (props) => {
  const {
    onClose,
    priceList,
    show,
    title,
    description,
    closeIcon,
    className,
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

  const renderPriceList = () => {
    return (
      <div className={classnames(bem('priceList'))}>
        {priceList &&
          priceList.length > 0 &&
          priceList.map((item: string, index) => {
            return (
              <div
                className={classnames(bem('list'))}
                key={index as number}
              >
                <div className={classnames(bem('line'))}>{item}</div>

              </div>
            );
          })}
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
          {renderPriceList()}
        </div>
      </div>
    </Popup>
  );
};

export default PriceDetail;
