import { BaseTypeProps } from '../utils';

export type Position = 'center' | 'top' | 'bottom' | 'right' | 'left';

export interface Column {
  values?: string[];
  defaultIndex?: number;
  className?: string;
  children?: Column;
}

export interface PickerProps extends BaseTypeProps {
  valueKey?: string;
  loading?: boolean;
  readonly?: boolean;
  columns?: Column[];
  showToolbar?: boolean;
  defaultIndex?: number;
  itemHeight?: number;
  visibleItemCount?: number;
  swipeDuration?: number | string;
  onChange?: (index?: number) => void;
}

export interface PickerColumnProps extends BaseTypeProps {
  textKey?: string;
  readonly?: boolean;
  allowHtml?: boolean;
  className?: string;
  itemHeight?: number;
  defaultIndex?: number;
  swipeDuration?: number | string;
  visibleItemCount?: number | string;
  initialOptions?: [];
  onChange?: (index?: number) => void;
}
