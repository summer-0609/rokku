/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import { isFunction, createNamespace } from '../utils';
import { PasswordInputProps } from './PropsType';
import './style';

const [bem] = createNamespace('password-input');

const PasswordInput = (props: PasswordInputProps, ref: any) => {
  const {
    value = '',
    type = 'tel',
    length = 6,
    onChange,
    onSubmit,
    validator,
    className,
    autoFocus = false,
    highlightClass = 'highlight',
    mask = true,
  } = props;
  const [code, setCode] = useState('');
  const [focused, setFocused] = useState(false);
  const [cursorIndex, setCursorIndex] = useState(0);
  const [codeArr, setCodeArr] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    inputRef?.current?.focus();
    setFocused(true);
  };

  const blur = () => {
    inputRef?.current?.blur();
    setFocused(false);
  };

  const clear = () => {
    setCode('');
    setCodeArr([]);
    setCursorIndex(0);
  };

  useEffect(() => {
    setCode(value || '');
    setCodeArr(value?.split(''));

    if (autoFocus) {
      // 聚焦
      setCursorIndex(0);
      setTimeout(() => {
        focus();
      }, 300);
    }
  }, []);

  useEffect(() => {
    setCodeArr(code.split(''));
    if (code.length >= length) {
      inputRef?.current?.blur?.();
      onSubmit(code);
    } else {
      setCursorIndex(code.length);
    }
  }, [code]);

  useImperativeHandle(ref, () => ({
    focus,
    blur,
    clear,
  }));

  return (
    <div className={classnames(bem(), className)}>
      <input
        ref={inputRef}
        id="code"
        type={type}
        pattern="[0-9]*"
        maxLength={6}
        value={code}
        autoComplete="false"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        onChange={(e) => {
          const val = e.target.value;
          if (isFunction(validator)) {
            if (validator(val)) {
              setCode(val);
              onChange?.(val);
            }
          } else {
            setCode(val);
            onChange?.(val);
          }
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {new Array(length).fill('').map((item, index) => {
        return (
          <label
            htmlFor="code"
            className={classnames(
              'line',
              focused && cursorIndex === index && !codeArr[index] ? 'animated' : '',
              codeArr[index] && !mask ? highlightClass : '',
            )}
            key={`label_${index + 1}`}
          >
            {mask && codeArr[index] ? (
              <span className={classnames('dot')} />
            ) : (
              <span>{codeArr[index]}</span>
            )}
          </label>
        );
      })}
    </div>
  );
};

export default forwardRef(PasswordInput);
