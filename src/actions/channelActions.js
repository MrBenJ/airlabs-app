import * as types from './actionTypes';

export function addChannel(channelId, token, channels) {
  return {
    type: types.ADD_CHANNEL,
    payload: {
      channelId,
      token,
      channels
    }
  };
}

export function removeChannel(channelId, token, channels) {
  return {
    type: types.REMOVE_CHANNEL,
    payload: {
      channelId,
      token,
      channels
    }
  };
}
