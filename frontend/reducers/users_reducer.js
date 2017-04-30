import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const UsersReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UsersReducer;
