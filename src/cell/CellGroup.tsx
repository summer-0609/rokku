import React from 'react';
import classnames from 'classnames';
import { CellGroupProps } from './PropsType';
import { createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [bem] = createNamespace('cell-group');

const CellGroup: React.FC<CellGroupProps> = (props) => {
  const { title, border = true } = props;

  const Group = (
    <div className={classnames(bem(), { [BORDER_TOP_BOTTOM]: border })}>{props.children}</div>
  );

  if (title) {
    return (
      <>
        <div className={classnames(bem('title'))}>{title}</div>
        {Group}
      </>
    );
  }
  return Group;
};

export default CellGroup;
