import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import CheckBoxContext from './CheckboxContext';

import { CheckBoxGroupProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('checkbox-group');

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = (props) => {
  const [checked, setChecked] = useState(props.initChecked);

  const emit = (type?: string, args?: unknown) => {
    const name = `on${type.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}`;
    if (props[name] && typeof props[name] === 'function') {
      props[name](args);
    }
  };

  const toggle = (name: Array<string | number>) => {
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

  return (
    <CheckBoxContext.Provider value={{ parent: { props }, toggle, checked }}>
      <div className={classnames(bem([props.direction]))}>{props.children}</div>
    </CheckBoxContext.Provider>
  );
};

export default CheckBoxGroup;
