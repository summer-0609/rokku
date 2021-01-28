import { BaseTypeProps } from '../utils';

export interface PriceDetailProps extends BaseTypeProps {
  closeIcon?: string;
  priceList?: string[];
  title?: string;
  description?: string;
  show?: boolean;
  className?: string;
  buttonName?: string;
  onClick?: (e: string) => void;
  onClose?: () => void;
}
