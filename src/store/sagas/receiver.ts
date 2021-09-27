import { AxiosResponse } from 'axios';
import { put, call, take } from '@redux-saga/core/effects';
import { GET_RECEIVER, getReceiver, setReceiver } from 'store/actions/receiver';
import { requestGetReceiver } from 'store/api';

export function* handleGetReceiver(action: ReturnType<typeof getReceiver>) {
  try {
    const id = action.payload;
    const response: AxiosResponse = yield call(requestGetReceiver, id);
    const { data } = response;
    yield put(setReceiver(data.data));
  } catch (error) {
    console.log(error);
  }
}
