import { BaseTypeProps } from '../utils';
import { CheckerProps } from '../checkbox/PropsType';

export interface RadioGroupProps extends BaseTypeProps {
  disabled?: boolean;
  iconSize?: number | string;
  direction?: string;
  checkedColor?: string;
  initChecked?: string | number;
  onChange?: (name: string | number) => void;
}

export interface RadioProps extends CheckerProps<RadioGroupProps> {
  initChecked?: string | number;
}
