import products from './products';

const baseUrl = process.env.BASE_URL;
export const api = (url: string, config?: RequestInit) => fetch(`${baseUrl}/api/${url}`, config);

export default {
  products,
};
