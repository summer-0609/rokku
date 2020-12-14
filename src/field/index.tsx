import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import Cell from '../cell';
import Loading from '../loading';
import { FieldProps } from './PropsType';
import { createNamespace } from '../utils';
import { BORDER_SURROUND, WHITE } from '../utils/constant';

const [bem] = createNamespace('field');

const Field: React.FC<FieldProps> = (props) => {
  return <div>Field</div>;
};

Field.defaultProps = {
  size: 'normal',
  type: 'default',
};

export default Field;
