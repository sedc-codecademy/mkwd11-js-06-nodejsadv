export interface Product {
  id: string;
  title: string;
  price: number;
  description?: string;
  colors: string[];
  status: ProductStatus;
}

export enum ProductStatus {
  available = 'available',
  unavailable = 'unavailable',
}
