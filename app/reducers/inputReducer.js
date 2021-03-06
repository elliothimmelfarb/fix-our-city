import * as types from '../types';

const initialState = {
  title: '',
  description: '',
  location: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INPUT_ISSUE_TITLE: {
      return Object.assign(
        {},
        state,
        { title: action.title }
      );
    }
    case types.GET_USER_LOCATION: {
      return Object.assign(
        {},
        state,
        { location: '' }
      );
    }
    case types.INPUT_ISSUE_DESCRIPTION: {
      return Object.assign(
        {},
        state,
        { description: action.description }
      );
    }
    case types.CLEAR_INPUT: {
      return Object.assign(
        {},
        state,
        { title: '', description: '', location: '' }
      );
    }
    case types.INPUT_LOCATION: {
      return Object.assign(
        {},
        state,
        { location: action.val }
      );
    }
    default:
      return state;
  }
};
