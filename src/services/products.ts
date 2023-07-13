import service from '.';

export type Product = {
  id: number;
  name: string;
  image: string | null;
  price: number;
  available: boolean;
};

export type ProductPayload = {
  name: string;
  image?: string;
  price: string;
};

export const getProducts = () => service.get<Product[]>('/products');
export const createProduct = (product: ProductPayload) =>
  service.post<Product>('/products', { ...product, available: true });
