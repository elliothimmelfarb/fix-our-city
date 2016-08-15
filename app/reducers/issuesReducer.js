import * as types from '../types';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MAP_DATA: {
      return Object.assign({}, state, { list: action.issues, issuesLoading: false });
    }
    case types.ISSUES_LOADING: {
      return Object.assign({}, state, { issuesLoading: true });
    }
    case types.SELECT_ISSUE: {
      // eslint-disable-next-line no-underscore-dangle
      const selected = state.list.filter(issue => issue.obj._id === action.id);
      return Object.assign({}, state, { selected: selected[0] });
    }
    default:
      return state;
  }
};
