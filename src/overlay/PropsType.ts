import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

export interface OverlayProps extends BaseTypeProps {
  show?: boolean;
  zIndex?: boolean;
  customStyle?: CSSProperties;
  duration?: number;
  lockScroll?: boolean;
}
