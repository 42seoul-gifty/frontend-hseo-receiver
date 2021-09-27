import { IReceiver } from 'config';

export const GET_RECEIVER = 'GET_RECEIVER' as const;
export const SET_RECEIVER = 'SET_RECEIVER' as const;

export const getReceiver = (id: string) => ({
  type: GET_RECEIVER,
  payload: id,
});

export const setReceiver = (receiver: IReceiver) => ({
  type: SET_RECEIVER,
  payload: receiver,
});

export type ReceiverAction =
  | ReturnType<typeof getReceiver>
  | ReturnType<typeof setReceiver>;
