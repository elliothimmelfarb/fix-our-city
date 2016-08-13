import * as types from '../types';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MAP_DATA: {
      return Object.assign({}, state, { list: action.issues });
    }
    default:
      return state;
  }
};
