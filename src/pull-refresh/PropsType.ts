import { BaseTypeProps } from '../utils';

export type LoadingType = 'circular' | 'spinner';

export interface PullRefreshProps extends BaseTypeProps {
  disabled: boolean;
  successText?: string;
  pullingText?: string;
  loosingText?: string;
  loadingText?: string;
  modelValue?: boolean;
  successDuration?: number | string;
  animationDuration?: number | string;
  headHeight?: number | string;
}
