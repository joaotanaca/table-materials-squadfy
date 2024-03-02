import positions from '../constants/positions';
import { Product } from './Product';

export type ColumnProps = Product & {
  position?: keyof typeof positions;
  column?: string;
};
