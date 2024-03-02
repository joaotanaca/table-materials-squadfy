'use server';

import service from '../service';
import { Product } from '../types/Product';

export async function saveProducts(body: Product[]) {
  return service.products.post(body) as unknown as Promise<Product[]>;
}
