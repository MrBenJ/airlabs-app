import { GET_TOKEN_OK } from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function tokenReducer(state = initialState.token, action) {
  switch(action.type) {

    case GET_TOKEN_OK: {
      return `${action.payload.token}`;
    }
    default: {
      return state;
    }
  }
}
