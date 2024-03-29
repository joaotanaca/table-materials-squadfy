export type Product = {
  id?: string;
  name?: string;
  type?: string;
  brand?: string;
  price?: string;
  minimum_quantity?: number;
  unit_quantity?: number;
  subtotal?: number;
  [key: string]: string | number | undefined;
};
