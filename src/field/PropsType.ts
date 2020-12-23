import { ReactElement } from 'react';
import { BaseTypeProps } from '../utils';
import { CellProps } from '../cell/PropsType';

export type TAlignment = 'center' | 'right' | 'left';

export interface FieldProps extends BaseTypeProps, CellProps {
  value?: string;
  type?: string;
  name?: string;
  placeholder?: string | number;
  autosize?: boolean;
  errorMessage?: string;
  labelClass?: string;
  labelWidth?: string;
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
  input?: (e: React.MouseEvent<HTMLDivElement>) => void;
  clear?: (e: React.MouseEvent<HTMLDivElement>) => void;
  click?: (e: React.MouseEvent<HTMLDivElement>) => void;
  focus?: (e: React.MouseEvent<HTMLDivElement>) => void;
  blur?: (e: React.MouseEvent<HTMLDivElement>) => void;
  clickInput?: (e: React.MouseEvent<HTMLDivElement>) => void;
  clickLeftIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
  clickRightIcon?: (e: React.MouseEvent<HTMLDivElement>) => void;
  getContainerRef?: (ref) => void;
  getFieldRef?: (ref) => void;
  formatter?: (val: string | number) => string;
  button?: ReactElement;
}
