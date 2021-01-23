/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import RadioContext from './RadioContext';

import { createNamespace } from '../utils';
import { RadioGroupProps } from './PropsType';

const [bem] = createNamespace('radio-group');

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const [checked, setChecked] = useState(props.value ?? props.defaultValue);

  const emit = (type?: string, args?: unknown) => {
    const name = `on${type.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}`;
    if (props[name] && typeof props[name] === 'function') {
      props[name](args);
    }
  };

  const toggle = (name: string) => {
    if (props.asyncChange) {
      emit('change', name);
    } else {
      setChecked(name);
    }
  };

  useEffect(() => {
    if (!props.asyncChange) {
      emit('change', checked);
    }
  }, [checked]);

  useEffect(() => {
    setChecked(props.value);
  }, [props.value]);

  return (
    <RadioContext.Provider value={{ parent: { props }, toggle, checked }}>
      <div className={classnames(bem([props.direction]))} role="radiogroup">
        {props.children}
      </div>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
