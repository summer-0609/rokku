import { CSSProperties } from 'react';
import { BaseTypeProps } from '../utils';

type Position = 'center' | 'top' | 'bottom' | 'right' | 'left';
export interface PopupProps extends BaseTypeProps {
  round?: boolean;
  visible?: boolean;
  overlay?: boolean;
  closeable?: boolean;
  overlayClass?: string;
  overlayStyle?: CSSProperties;
  destroyOnClose?: boolean;
  forceRender?: boolean;
  duration?: number;
  closeIcon?: string;
  position?: Position;
  transition?: string;
  safeAreaInsetBottom?: boolean;
  closeIconPosition?: string;
  onClick?: () => void;
  onClickOverlay?: () => void;
  overlayClosable?: boolean;
  onClose?: () => void;
}
