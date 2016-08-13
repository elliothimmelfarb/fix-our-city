import * as types from '../types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MAP_DATA: {
      return [...action.issues];
    }
    default:
      return state;
  }
};
