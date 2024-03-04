import dynamic from 'next/dynamic';
import PriceColumn from './PriceColumn';
import ImageColumn from './ImageColumn';

const UnitQuantityColumn = dynamic(() => import('./UnitQuantityColumn'), {
  loading: () => <td className="text-right">Loading...</td>,
});

export default {
  price: PriceColumn,
  unit_quantity: UnitQuantityColumn,
  image: ImageColumn,
};
