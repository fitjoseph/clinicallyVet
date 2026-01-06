export interface Product {
  id: string;
  name: string;
  category: 'dogs' | 'cats' | 'birds' | 'fish' | 'small-animals' | 'reptiles' | 'exotic-animals' | 'livestock' | 'vaccines' | 'lab-products';
  price: number;
  description: string;
  image: string;
  features: string[];
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}