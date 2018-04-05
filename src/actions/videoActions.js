import * as types from './actionTypes';

export function getVideos(channels, token, offset) {
  return {
    type: types.GET_VIDEOS,
    payload: {
      channels,
      token,
      offset
    }
  }
}
