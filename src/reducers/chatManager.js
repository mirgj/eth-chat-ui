import * as actions from '../constants/actions';

const initialState = {
  rooms: [],
  room_count: 0,
};

export default function chatManager(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ROOM_COUNT:
      return Object.assign({}, state, {
        room_count: state.room_count + 10,
      });
    default:
      return state;
  }
};
