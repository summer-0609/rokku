/* eslint-disable no-console */
import React, { useState } from 'react';
import classnames from 'classnames';

import RadioContext from './RadioContext';

import { createNamespace } from '../utils';
import { RadioGroupProps } from './PropsType';

const [bem] = createNamespace('radio-group');

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const [checked, setChecked] = useState(props.initChecked);

  const toggle = (name: string) => {
    setChecked(name);
  };

  return (
    <RadioContext.Provider value={{ parent: { props }, toggle, checked }}>
      <div className={classnames(bem([props.direction]))} role="radiogroup">
        {props.children}
      </div>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
