import React from 'react';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity: number;
  discountedPrice: number;
}
export interface LoginResponseInterface {
  token: string;
  id: number;
}
export interface LoginProps {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  submitHandler: (event: React.FormEvent) => void;
}
export interface UserCredentials {
  username: string;
  password: string;
}

export interface onItemsPerPage {
  onItemsPerPageChange: (newItemsPerPage: number) => void;
}
export interface CarouselProductSingleProps {
  imagesProduct: string[];
}
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairDetails;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: BankInfo;
  company: CompanyInfo;
  ein: string;
  ssn: string;
  userAgent: string;
}
export interface HairDetails {
  color: string;
  type: string;
}
export interface Coordinates {
  lat: number;
  lng: number;
}
export interface Address {
  address: string;
  city: string;
  coordinates: Coordinates;
  postalCode: string;
  state: string;
}
export interface BankInfo {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}
export interface CompanyInfo {
  address: Address;
  department: string;
  name: string;
  title: string;
}
export interface ShoppingCartImp {
  id: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
