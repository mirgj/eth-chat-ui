import { combineReducers } from 'redux';
import chatManager from './chatManager';
import chatRoom from './chatRoom';
import messages from './messages';

export default combineReducers({
  chatManager,
  chatRoom,
  messages,
});
