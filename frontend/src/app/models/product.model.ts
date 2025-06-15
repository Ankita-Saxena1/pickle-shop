export interface Product {
  id?: string;
  name: string;
  weight: number;
  unit: string;
  imageUrl: string[];
  category: string[];
  description: string;
  price: number;
  currency: string;
  isAvailable: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  rating?: number; // Optional field for product rating
  reviews?: string[]; // Optional field for product reviews
  tags?: string[]; // Optional field for product tags
  nutrition?: {
    calories: number;
    fat: number;
    protein: number;
    carbohydrates: number;
  }
  fiber: number;
  sugar: number;
  sodium: number;
  allergens?: string[]; // Optional field for allergens
}