/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef, useState, useEffect, CSSProperties } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import Cell from '../cell';
import { FieldProps } from './PropsType';
import { createNamespace, isDef, addUnit } from '../utils';

const [bem] = createNamespace('field');
const ICON_SIZE = '16px';

const Field: React.FC<FieldProps> = (props) => {
  const {
    value,
    type = 'text',
    size,
    label,
    isLink,
    name,
    center = false,
    placeholder = '',
    readonly,
    disabled,
    autosize,
    colon,
    labelIcon,
    leftIcon,
    rightIcon,
    clearable,
    clickable,
    input,
    clear,
    click,
    focus,
    blur,
    clickInput,
    clickLeftIcon,
    clickRightIcon,
    getContainerRef,
    getFieldRef,
    autofocus,
    error,
    errorMessage,
    maxLength,
    showWordLimit,
    button,
    formatter = () => true,
    labelClass,
    labelWidth,
    labelAlign = 'left',
    inputAlign = 'left',
    errorMessageAlign = 'left',
    required,
    border = true,
    arrowDirection,
  } = props;

  const [containerFocus, setContainerFocus] = useState(false);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (formatter(inputValue)) {
      if (input) {
        if (!maxLength) {
          return input(inputValue);
        }

        if ((value && value.length < maxLength) || inputValue.length < maxLength) {
          return input(inputValue);
        }
      }

      return inputValue;
    }

    return inputValue;
  };

  const handleClick = (e) => {
    if (clickable && click) {
      return click(e);
    }

    return null;
  };

  const handleClickInput = (e) => {
    if (clickable && clickInput) {
      return clickInput(e);
    }

    return null;
  };

  const handleFocus = (e) => {
    if (focus) return focus(e);

    return null;
  };

  const handleBlur = (e) => {
    if (blur) return blur(e);

    return null;
  };

  const handleClickLeftIcon = (e) => {
    if (clickLeftIcon && clickable) return clickLeftIcon(e);

    return null;
  };

  const handleClickRightIcon = (e) => {
    if (clickRightIcon && clickable) return clickRightIcon(e);

    return null;
  };

  const fieldContainerRef = useRef(null);
  const fieldRef = useRef(null);

  useEffect(() => {
    if (getContainerRef) getContainerRef(fieldContainerRef);
    if (getFieldRef) getFieldRef(fieldRef);
  }, [getContainerRef, getFieldRef]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (fieldContainerRef?.current?.contains(e.target)) {
        setContainerFocus(true);
      } else {
        setContainerFocus(false);
      }
    });
    return () => window.removeEventListener('click', () => {});
  }, []);

  const containerProps = {
    className: classnames(bem(''), [
      { disabled },
      { readonly },
      { error },
      { showWordLimit },
      { [`input-${inputAlign}`]: inputAlign },
      { [`label-${labelAlign}`]: labelAlign },
      { [`error-${errorMessageAlign}`]: errorMessageAlign },
      { border },
      { required },
    ]),
    onClick: handleClick,
    ref: fieldContainerRef,
  };

  const inputProps = {
    value,
    type,
    name,
    placeholder: placeholder || label,
    disabled,
    readOnly: readonly,
    ref: fieldRef,
    autoFocus: autofocus,
    onChange: handleInput,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: handleClickInput,
  };

  const labelProps = {
    htmlFor: name,
    className: labelClass,
  };

  const labelContainerProps = {
    style: {},
    className: classnames(bem('label'), labelClass),
  };

  const getProp = (key) => {
    if (isDef(props[key])) {
      return props[key];
    }
    // if (form && isDef(form.props[key])) {
    //   return form.props[key];
    // }

    return null;
  };

  const labelStyle = (): CSSProperties => {
    const labelW = getProp('labelWidth');
    if (labelW) {
      return { width: addUnit(labelW) };
    }

    return {};
  };

  if (type === 'digit') Object.assign(inputProps, { inputMode: 'numeric', type: 'tel' });

  if (labelWidth) Object.assign(labelContainerProps, { style: { width: labelWidth } });

  return (
    // error: showError.value,
    <Cell
      size={size}
      icon={leftIcon}
      center={center}
      border={border}
      isLink={isLink}
      required={required}
      clickable={clickable}
      titleStyle={labelStyle()}
      valueClass={classnames(bem('value'))}
      titleClass={classnames(bem('label', labelAlign), labelClass)}
      arrowDirection={arrowDirection}
      className={classnames(
        bem({
          disabled: props.disabled,
          [`label-${labelAlign}`]: labelAlign,
          'min-height': props.type === 'textarea' && !autosize,
        }),
      )}
    >
      <div {...containerProps}>
        {label && (
          <div {...labelContainerProps}>
            {labelIcon && <Icon name={labelIcon} size={ICON_SIZE} />}
            <label {...labelProps}>
              {label}
              {colon && ':'}
            </label>
          </div>
        )}
        <div className={classnames(bem('input'))}>
          <div className={classnames(bem('field'))}>
            {leftIcon && (
              <Icon
                color="#323233"
                onClick={handleClickLeftIcon}
                name={leftIcon}
                size={ICON_SIZE}
              />
            )}
            {/* <input {...inputProps} /> */}
            <input
              type={type}
              value={value}
              placeholder={`${placeholder}`}
              name={name}
              disabled={disabled}
              readOnly={readonly}
              ref={fieldRef}
              autoFocus={autofocus}
              onChange={handleInput}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onClick={handleClickInput}
            />
            {clearable && value && containerFocus && (
              <Icon onClick={clear} name="clear" size={ICON_SIZE} />
            )}
            {rightIcon && !clearable && (
              <Icon onClick={handleClickRightIcon} name={rightIcon} size={ICON_SIZE} />
            )}
            {button && button}
          </div>
          {error && errorMessage && <div className={classnames(bem('error'))}>{errorMessage}</div>}
          {showWordLimit && (
            <div
              className={classnames(bem('word-limit'), value?.length === maxLength ? 'full' : '')}
            >
              {value ? value.length : 0}/{maxLength}
            </div>
          )}
        </div>
      </div>
    </Cell>
  );
};

export default Field;
