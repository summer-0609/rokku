import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import CheckBoxContext from './CheckboxContext';

import { CheckBoxGroupProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('checkbox-group');

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = (props) => {
  const [checked, setChecked] = useState(props.initChecked);

  const toggle = (name: Array<string | number>) => {
    setChecked(name);
  };

  useEffect(() => {
    if (props.onChange) {
      props.onChange(checked);
    }
  }, [checked]);

  return (
    <CheckBoxContext.Provider value={{ parent: { props }, toggle, checked }}>
      <div className={classnames(bem([props.direction]))}>{props.children}</div>
    </CheckBoxContext.Provider>
  );
};

export default CheckBoxGroup;
