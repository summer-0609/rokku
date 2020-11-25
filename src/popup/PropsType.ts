import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

export interface PopupProps extends BaseTypeProps {
  round?: boolean;
  visible?: boolean;
  overlay?: boolean;
  closeable?: boolean;
  overlayClass?: string;
  overlayStyle?: CSSProperties;
  duration?: number;
  closeIcon?: string;
  onClick?: (e: Event) => void;
  onClickOverlay?: () => void;
  overlayClosable?: boolean;
  onClose?: () => void;
}
