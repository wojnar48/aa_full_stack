import { SET_ACTIVE_CHANNEL } from '../actions/active_channel_actions';
import { merge } from 'lodash';

const ActiveChannelReducer = (state = null, action) => {
  switch(action.type) {
    case SET_ACTIVE_CHANNEL:
      return merge({}, action.activeChannel);
    default:
      return state;
  }
};

export default ActiveChannelReducer;