import { put, call, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../actions/actionTypes';
import {
  API_GET_TOKEN,
  VIMEO_SECRET,
  VIMEO_CLIENT_ID } from '../constants';

export function* getTokenSaga() {
  const resp = yield call(axios, {
    method: 'POST',
    url: API_GET_TOKEN,
    headers: {
      'content-type': 'application/json',
      'Authorization':
        `basic ${btoa(VIMEO_CLIENT_ID + ':' + VIMEO_SECRET)}`
    },
    data: { grant_type: 'client_credentials'}
  });

  yield put({
    type: types.GET_TOKEN_OK,
    payload: {
      token: resp.data.access_token
    }
  });
}

export function* watchGetToken() {
  yield takeEvery(types.GET_TOKEN, getTokenSaga);
}

export default function* rootTokenSaga() {
  yield all([
    watchGetToken()
  ]);
}
