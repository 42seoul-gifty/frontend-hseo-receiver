import { AxiosResponse } from 'axios';
import { put, call } from '@redux-saga/core/effects';
import { setReceiver } from 'store/actions/receiver';
import { requestGetReceiver } from 'store/api';

export function* handleGetReceiver() {
  try {
    const response: AxiosResponse = yield call(requestGetReceiver);
    const { data } = response;
    yield put(setReceiver(data[0]));
  } catch (error) {
    console.log(error);
  }
}
