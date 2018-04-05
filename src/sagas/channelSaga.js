import { put, call, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import * as types from '../actions/actionTypes';

function* addChannel({ payload }) {
  try {
    const { channelId, token, channels } = payload;
    const { data } = yield call(axios, {
      method: 'GET',
      url: `https://api.vimeo.com/channels/${channelId}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const { name, description } = data;
    const channel = {
      channelId,
      name,
      description
    };
    const newChannels = [...channels, channel];

    yield put({
      type: types.ADD_CHANNEL_OK,
      payload: {
        channelId,
        channels: newChannels
      }
    });

    yield put({
      type: types.GET_VIDEOS,
      payload: {
        channels: newChannels,
        token
      }
    });
  } catch(error) {
    console.error(error);
    put({ type: types.ADD_CHANNEL_FAIL})
  }
}

function* removeChannel({ payload }) {
  let { channelId, channels, token } = payload;

  let newChannels = channels.filter( item => item.channelId !== channelId );
  console.log(newChannels);
  yield put({ type: types.GET_VIDEOS, payload: {
    channels: newChannels,
    token
  }});

  yield put({ type: types.REMOVE_CHANNEL_OK, payload: {
    channelId,
    channels: newChannels
  }});

}

function* watchAddChannel() {
  yield takeEvery(types.ADD_CHANNEL, addChannel);
}

function* watchRemoveChannel() {
  yield takeEvery(types.REMOVE_CHANNEL, removeChannel);
}

export default function* rootChannelSaga() {
  yield all([
    watchAddChannel(),
    watchRemoveChannel()
  ]);
}
