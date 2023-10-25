import { Googs } from '../types/Goods';
import { PhoneInfo } from '../types/PhoneInfo';
import { client } from '../helper/FetchClient';

export const getProducts = async () => {
  return client.get<Googs[]>('/products.json');
};

export const getDescription = async (id: string) => {
  return client.get<PhoneInfo>(`/products/${id}.json`);
};

export const getProductsByCategory = async (type: string) => {
  return client.get<Googs[]>('/products.json')
    .then(response => {
      if (type) {
        return [...response].filter(product => product.category === type);
      }

      return response;
    });
};
