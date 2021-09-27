import { IChoice } from 'config';

export const GET_CHOICE = 'GET_CHOICE' as const;
export const SET_CHOICE = 'SET_CHOICE' as const;

export const getChoice = (id: string) => ({
  type: GET_CHOICE,
  payload: id,
});

export const setChoice = (choice: IChoice) => ({
  type: SET_CHOICE,
  payload: choice,
});

export type ChoiceAction =
  | ReturnType<typeof getChoice>
  | ReturnType<typeof setChoice>;
