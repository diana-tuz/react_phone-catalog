import { Googs } from '../types/Goods';
import { PhoneInfo } from '../types/PhoneInfo';
import { client } from '../helper/FetchClient';

export const getProducts = async () => {
  return client.get<Googs[]>('/products.json');
};

export const getDescription = async (id: string) => {
  return client.get<PhoneInfo>(`/products/${id}.json`);
};
