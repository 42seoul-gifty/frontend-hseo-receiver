import { takeLatest, all } from '@redux-saga/core/effects';
import { GET_RECEIVER } from 'store/actions/receiver';
import { handleGetReceiver } from './receiver';
import { handleGetChoice } from './choice';
import { GET_CHOICE } from 'store/actions/choice';

export function* watcherSaga() {
  yield all([
    takeLatest(GET_RECEIVER, handleGetReceiver),
    takeLatest(GET_CHOICE, handleGetChoice),
  ]);
}
