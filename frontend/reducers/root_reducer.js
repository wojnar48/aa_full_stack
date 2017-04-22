import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import StateReducer from './state_reducer';
import ActiveChannelReducer from './active_channel_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  channels: ChannelReducer,
  state: StateReducer,
  activeChannel: ActiveChannelReducer
});

export default RootReducer;
