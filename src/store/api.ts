import axios from 'axios';
import { BASE_URL } from 'config';

export const requestGetReceiver = (id: string) => {
  return axios.get(`${BASE_URL}/receiver/${id}`);
};

export const requestGetChoice = (id: string) => {
  return axios.get(`${BASE_URL}/receiver/${id}/choice`);
};
