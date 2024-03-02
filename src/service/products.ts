import { api } from '.';
import { Product } from '@/src/types/Product';

export default {
  async get(): Promise<{ products: Product[]; totalPrice: number }> {
    const response = await api('products');
    const products: Product[] = await response.json();
    const totalPrice = products.reduce((prev, { subtotal }) => Number(subtotal) + prev, 0);
    return { products, totalPrice };
  },
  async post(body: Product[]): Promise<Response> {
    const response = await api('products', {
      body: JSON.stringify(body),
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    });
    return response.json();
  },
};
