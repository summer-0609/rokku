import React, { useContext } from 'react';

import RadioContext from './RadioContext';
import Checker from '../checkbox/Checker';

import RadioGroup from './RadioGroup';

import { CheckerProps } from '../checkbox/PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('radio');

const Radio: React.FC<CheckerProps> & { Group?: typeof RadioGroup } = (props) => {
  const { parent, ...context } = useContext(RadioContext);

  const checked = () => {
    return parent ? context.checked === props.name : props.checked;
  };

  const toggle = () => {
    const emitter = parent ? context.toggle : () => {};
    emitter(props.name);
  };

  return (
    <Checker
      bem={bem}
      role="radio"
      parent={parent}
      checked={checked()}
      onToggle={toggle}
      {...props}
    />
  );
};

export default Radio;
