'use server';

import service from '../service';
import { Product } from '../types/Product';

export async function saveProducts(body: Product[]) {
  await service.products.post(body);
}
