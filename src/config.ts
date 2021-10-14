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
  [key: string]: string | number | undefined;
  id: string | undefined;
  name: string | undefined;
  phone: string | undefined;
  product: number | undefined;
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
  likes: number[];
  dislikes: number[];
}
