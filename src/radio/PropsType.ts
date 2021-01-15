import { BaseTypeProps } from '../utils';

export interface RadioGroupProps extends BaseTypeProps {
  disabled: Boolean;
  iconSize: number | string;
  direction: string;
  checkedColor: string;
  initChecked: string | number;
}
