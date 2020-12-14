import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

type CellArrowDirection = 'up' | 'down' | 'left' | 'right';

export interface FieldProps extends BaseTypeProps {
  icon?: string;
  size?: string;
  title?: number | string;
  value?: number | string;
  label?: number | string;
  center?: boolean;
  round?: boolean;
  isLink?: boolean;
  required?: boolean;
  clickable?: boolean;
  iconPrefix?: string;
  titleStyle?: CSSProperties;
  titleClass?: string;
  valueClass?: string;
  arrowDirection?: CellArrowDirection;
  border?: boolean;

  type?: string;
  error?: boolean;
  colon?: boolean;
  modelValue?: number | string;
  clearTrigger?: string;
  formatTrigger?: string;
  rows?: number | string;
  name?: string;
  rules?: Array<any>;
  disabled?: boolean;
  readonly: boolean;
  autosize: boolean | any;
  leftIcon: string;
  rightIcon: string;
  clearable: boolean;
  formatter: () => any;
  maxlength: number | string;
  labelWidth: number | string;
  labelClass: null;
  labelAlign: string;
  inputAlign: string;
  placeholder: string;
  errorMessage: string;
  errorMessageAlign: string;
  showWordLimit: boolean;
}
