import { BaseTypeProps } from '../utils';

export interface ComplainProps extends BaseTypeProps {
  closeIcon:string;
  resourceList: string[];
  title: string,
  description: string,
  show:boolean;
  className?: string;
  noChooseIcon:string;
  chooseIcon:string;
  buttonName:string;
  onClick?: (e:string) => void;
  onClose?: () => void;
}
