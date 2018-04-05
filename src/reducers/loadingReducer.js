import initialState from '../store/initialState';

export default function loadingReducer(state = initialState.loading, action) {

  switch(true) {

    case (action.type.endsWith('ASYNC')): {
      let newState = Object.assign({}, state);
      newState.callsInProgress++;
      return newState;
    }

    case (
      action.type.endsWith('OK') ||
      action.type.endsWith('FAIL')
    ): {
      let newState = Object.assign({}, state);
      newState.callsInProgress--;
      return newState;
    }

    default: {
      return state;
    }
  }

}
