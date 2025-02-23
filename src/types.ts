export type Address = {
  firstline: string;
  postcode: string;
  city: string;
};

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: Address | undefined;
};

export interface LoginResponse {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: Address;
  token: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  stock?: {
    quantity: {
      value: number
    }
  }
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Option {
    id: number;
    label: string;
    description: string;
}

export interface City {
    id: number;
    label: string;
    postcode: string;
}