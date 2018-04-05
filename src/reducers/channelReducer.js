import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function channelReducer(state = initialState.channels, action) {
  switch(action.type) {

    case types.ADD_CHANNEL_OK: {
      const { payload: { channels } } = action;

      return [...channels];
    }

    case types.REMOVE_CHANNEL_OK: {
      const { payload: { channels } } = action;

      return [...channels];
    }

    default: {
      return state;
    }
  }
}
