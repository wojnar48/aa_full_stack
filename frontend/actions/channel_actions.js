import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_DELETE_CHANNEL = 'RECEIVE_DELETE_CHANNEL';
export const REQUEST_CHANNELS = 'REQUEST_CHANNELS';
export const REQUEST_COMPLETE = 'REQUEST_COMPLETE';

export const fetchChannels = () => (dispatch) => {
  return ChannelApiUtil.fetchChannels()
    .then(res => dispatch(receiveChannels(res)),
    err => console.log(err));
};

export const createChannel = (channel) => (dispatch) => {
  return ChannelApiUtil.createChannel(channel)
    .then(res => dispatch(receiveChannel(res)),
    err => console.log(err));
};

export const deleteChannel = (id) => (dispatch) => {
  return ChannelApiUtil.deleteChannel(id)
    .then(res => dispatch(receiveDeleteChannel(res)),
    err => console.log(err));
};


export const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  };
};

export const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  };
};

export const receiveDeleteChannel = (channel) => {
  return {
    type: RECEIVE_DELETE_CHANNEL,
    channel
  };
};
