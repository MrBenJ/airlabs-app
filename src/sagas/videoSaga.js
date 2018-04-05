import { put, call, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';


function* getVideosFromChannel(channels, token) {
  for(let i = 0; i < channels.length; i++) {
    yield axios({
      method: 'GET',
      url: `https://api.vimeo.com/channels/${channels[i].channelId}/videos`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
  }
}

function* getVideosSaga({ payload }) {
  try {
    const { channels, token } = payload;
    let calls = [];
    let callGenerator = getVideosFromChannel(channels, token);

    while(true) {
      let iter = callGenerator.next();
      if(iter.done) { break; }

      let promise = iter.value;
      console.log(promise);

      if(promise) {
        calls.push(promise);
      }
    }

    let results = yield all(calls);
    let videos = [];
    results.forEach( response => {
      videos.push(...response.data.data);
    })

    yield put({
      type: types.GET_VIDEOS_OK,
      payload: {
        videos
      }
    });
  } catch (error) {
    console.error(error);
    yield put({ type: types.GET_VIDEOS_FAIL });
  }
}

function* watchGetVideos() {
  yield takeEvery(types.GET_VIDEOS, getVideosSaga);
}

export default function* rootVideoSaga() {
  yield all([watchGetVideos()]);
}

