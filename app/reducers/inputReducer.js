import * as types from '../types';

export default (state = {title: '', description: ''}, action) => {
  switch (action.type) {
    case types.INPUT_ISSUE_TITLE: {
      return Object.assign(
        {},
        state,
        { title: action.title }
      );
    }
    case types.INPUT_ISSUE_DESCRIPTION: {
      return Object.assign(
        {},
        state,
        { description: action.description }
    );
  }

    default:
      return state;
  }
}
