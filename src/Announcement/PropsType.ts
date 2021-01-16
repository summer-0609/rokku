import { BaseTypeProps } from '../utils';

interface Ad {
  mainTitle: string;
  iphoneUrl: string;
  adDescription: string;
  subTitle: string;
  linkUrl: string;
  imgUrl: string;
  adId: string;
  beginDate: string;
  endDate: string;
}

export interface AnnouncementProps extends BaseTypeProps {
  adList: Array<Ad>;
  mode?: 'closeable' | 'link';
  color?: string;
  background?: string;
  leftIcon?: string;
  onClick?: () => void;
}
