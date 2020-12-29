import { ReactElement } from 'react';
import { BaseTypeProps } from '../utils';
import { CellProps } from '../cell/PropsType';

export type TAlignment = 'center' | 'right' | 'left';

export interface FieldProps extends BaseTypeProps, Partial<CellProps> {
  value?: string;
  type?: string;
  name?: string;
  rows: number;
  placeholder?: string;
  autosize?: boolean;
  errorMessage?: string;
  labelClass?: string;
  labelWidth?: string;
  maxlength?: number;
  labelAlign?: TAlignment;
  inputAlign?: TAlignment;
  errorMessageAlign?: TAlignment; //
  maxLength?: number;
  showWordLimit?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  colon?: boolean;
  clickable?: boolean;
  autofocus?: boolean;
  required?: boolean;
  border?: boolean;
  error?: boolean;
  labelIcon?: string;
  leftIcon?: string;
  rightIcon?: string;
  formatTrigger?: string;
  onChange?: (val: string | number) => void;
  onClear?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (val: string | number) => void;
  onBlur?: (val: string | number) => void;
  onKeypress?: (val: string | number) => void;
  onClickInput?: (e: React.MouseEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onClickLeftIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickRightIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
  getFieldRef?: (ref) => void;
  formatter?: (val: string | number) => string;
  button?: ReactElement;
}
