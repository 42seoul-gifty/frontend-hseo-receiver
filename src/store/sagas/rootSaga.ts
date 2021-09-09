import { takeLatest } from '@redux-saga/core/effects';
import { GET_RECEIVER } from 'store/actions/receiver';
import { handleGetReceiver } from './receiver';

export function* watcherSaga() {
  yield takeLatest(GET_RECEIVER, handleGetReceiver);
}
