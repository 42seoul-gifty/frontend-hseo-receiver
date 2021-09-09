export const BASE_URL = 'https://gifty-mockserver.herokuapp.com';

export type productObj = {
  description: string;
  detail: string;
  id: number;
  image_url: string;
  name: string;
  price: string;
  thumbnail: string;
};

export interface IReceiver {
  [key: string]: string | productObj[];
  id: string;
  name: string;
  phone: string;
  product: productObj[];
  address: string;
}
