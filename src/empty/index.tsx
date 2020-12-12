import React from 'react';
import classnames from 'classnames';
import { EmptyPropsType } from './PropsType';
import { createNamespace } from '../utils';

export interface EmptyProps extends EmptyPropsType {
  onClick?: (e: Event) => void;
  className?: string;
  style?: React.CSSProperties;
}

const [bem] = createNamespace('empty');

const Empty: React.FC<EmptyProps> = (props) => {
  const { image, description, className } = props;

  const classes = classnames(bem(), className);

  const content = (
    <div className={classes}>
      <img src={image} className="empty-image" alt="empty" />
      <p className="empty-desc">{description}</p>
    </div>
  );

  return content;
};

Empty.defaultProps = {
  // size: 'normal',
  // type: 'default',
};

export default Empty;
