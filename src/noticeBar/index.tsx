import React from 'react';
import classnames from 'classnames';
import { NoticeBarPropsType } from './PropsType';
import { createNamespace } from '../utils';

export interface NoticeBarProps extends NoticeBarPropsType {
  onClick?: (e: Event) => void;
  className?: string;
  style?: React.CSSProperties;
}

const [bem] = createNamespace('noticeBar');

const NoticeBar: React.FC<NoticeBarProps> = (props) => {
  const { className } = props;

  const classes = classnames(bem(), className);

  const renderLeftIcon = () => {
    <div className={classnames(bem(), className)} />;
  };

  const renderMarquee = () => {};

  const content = (
    <div className={classes}>
      {renderLeftIcon}
      {renderMarquee}
    </div>
  );

  return content;
};

NoticeBar.defaultProps = {
  // size: 'normal',
  // type: 'default',
};

export default NoticeBar;
