import positions from '../constants/positions';

export type ColumnProps = {
  position?: keyof typeof positions;
  index?: number;
  column?: string;
};
