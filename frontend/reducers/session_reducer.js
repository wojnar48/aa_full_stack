import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
} from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, nullUser, { currentUser });
    case LOGOUT:
      return nullUser;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, nullUser, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
