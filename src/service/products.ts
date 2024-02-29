import { api } from '.';
import { Product } from '@/src/types/Product';

export default {
  async get(): Promise<Product[]> {
    const response = await api('products');
    return response.json();
  },
};
