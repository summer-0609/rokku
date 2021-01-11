import { BaseTypeProps } from '../utils';

export interface ComplainProps extends BaseTypeProps {
  closeIcon:string;
  resourceList: Array;
  show:boolean;
  className?: string;
  noChooseIcon:string;
  chooseIcon:string;
  onClick?: (e:string) => void;
  onClose?: () => void;
}
