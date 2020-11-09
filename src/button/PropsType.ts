export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export interface ButtonPropsType {
  tag?: keyof HTMLElementTagNameMap | string;
  type?: ButtonType;
  size?: ButtonSize;
  text?: string;
  icon?: string;
  color?: string;
  block?: boolean;
  plain?: boolean;
  round?: boolean;
  square?: boolean;
  loading?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  nativeType?: string;
  loadingSize?: string;
  // loadingType?: LoadingType;
  loadingText?: string;
}
