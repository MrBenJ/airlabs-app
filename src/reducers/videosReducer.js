import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function videosReducer(state = initialState.videos, action) {

  switch(action.type) {

    case types.GET_VIDEOS_OK: {
      const { payload } = action;
      console.log(payload);
      return [...payload.videos];
    }
    default: {
      return state;
    }
  }
}
