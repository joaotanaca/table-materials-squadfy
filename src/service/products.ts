import { api } from '.';
import { Product } from '@/src/types/Product';

export default {
  async get(): Promise<Product[]> {
    const response = await api('products');
    return response.json();
  },
  async post(body: Product[]): Promise<undefined> {
    await api('products', {
      body: JSON.stringify(body),
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
  },
};
