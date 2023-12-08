export interface Product {
  id: string;
  category: Category;
  subcategory: Subcategory;
  name: string;
  price: string;
  isFeatured: boolean;
  isTrending: boolean;
  size: Size;
  color: Color;
  images: Image[]
};

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};
export interface Subcategory {
  id: string;
  name: string;
  
  category: Category;
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};
