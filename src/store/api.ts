import api from 'api';

export const requestGetReceiver = (id: string) => {
  return api.get(`/receiver/${id}`);
};

export const requestGetChoice = (id: string) => {
  return api.get(`/receiver/${id}/choice`);
};
