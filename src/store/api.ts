import axios from 'axios';
import { BASE_URL } from 'config';

export const requestGetReceiver = () => {
  return axios.get(`${BASE_URL}/receiver`);
};
