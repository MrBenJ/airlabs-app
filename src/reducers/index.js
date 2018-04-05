import { combineReducers } from 'redux';

import videos from './videosReducer';
import token from './tokenReducer';
import loading from './loadingReducer';
import channels from './channelReducer';

const rootReducer = combineReducers({
  videos,
  token,
  loading,
  channels
});

export default rootReducer;
