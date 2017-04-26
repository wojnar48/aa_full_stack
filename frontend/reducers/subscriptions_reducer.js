
import {
  RECEIVE_SUBSCRIPTIONS,
  RECEIVE_SUBSCRIPTION } from '../actions/subscription_actions';
import { merge } from 'lodash';

export const SubscriptionsReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_SUBSCRIPTIONS:
    newState = {};
      action.subscriptions.forEach(subscription => {
        newState[subscription.id] = subscription;
      });
      return newState;
    case RECEIVE_SUBSCRIPTION:
      newState = merge({}, state);
      newState[action.subscription.id] = action.subscription;
      return newState;
    default:
      return state;
  }
};

export default SubscriptionsReducer;