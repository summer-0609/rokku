import { BaseTypeProps } from '../utils';

export interface TagProps extends BaseTypeProps {
  size: string;
  mark: boolean;
  color: string;
  plain: boolean;
  round: boolean;
  textColor: string;
  closeable: boolean;
  type: string;
  show: boolean;
  hairline: boolean;
  onClose: () => void;
}
