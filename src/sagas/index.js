import { fork, all } from 'redux-saga/effects';

import tokenSaga from './tokenSaga';
import videoSaga from './videoSaga';
import channelSaga from './channelSaga';

export default function* rootSaga() {
  yield all([
    fork(tokenSaga),
    fork(videoSaga),
    fork(channelSaga)
  ]);
}
