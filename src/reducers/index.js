import { combineReducers } from 'redux';
import chatManager from './chatManager';
import chatRoom from './chatRoom';

export default combineReducers({
  chatManager,
  chatRoom,
});
