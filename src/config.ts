export const BASE_URL = 'https://hokim.gifty4u.com';

export type productObj = {
  description: string;
  detail: string;
  id: string;
  image_url: string;
  name: string;
  price: string;
  thumbnail: string;
};

export interface IReceiver {
  [key: string]: string | productObj | undefined;
  id: string | undefined;
  name: string | undefined;
  phone: string | undefined;
  product: productObj | undefined;
  address: string | undefined;
}

export interface IChoice {
  [key: string]: string | productObj[];
  giver_name: string;
  giver_phone: string;
  products: productObj[];
}
