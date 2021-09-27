import { AxiosResponse } from 'axios';
import { put, call } from '@redux-saga/core/effects';
import { getChoice, setChoice } from 'store/actions/choice';
import { requestGetChoice } from 'store/api';

export function* handleGetChoice(action: ReturnType<typeof getChoice>) {
  try {
    const id = action.payload;
    const response: AxiosResponse = yield call(requestGetChoice, id);
    const { data } = response;
    yield put(setChoice(data.data));
  } catch (error) {
    console.log(error);
  }
}
