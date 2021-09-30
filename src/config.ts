import internal from 'stream';

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
  product: string | undefined;
  address: string | undefined;
}

export interface IChoice {
  [key: string]: string | productObj[];
  giver_name: string;
  giver_phone: string;
  products: productObj[];
}

export interface IAddressInfo {
  product_id: number;
  post_code: string;
  address: string;
  address_detail: string;
  likes: string[];
  dislikes: string[];
}
