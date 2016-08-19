import * as types from '../types';

const initialState = {
  list: [],
  issuesLoading: false,
  upvoted: [],
  downvoted: [],
  selected: [],
  selectedId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ISSUES: {
      return Object.assign({}, state, { list: action.issues, issuesLoading: false, selected: [] });
    }
    case types.ISSUES_LOADING: {
      return Object.assign({}, state, { issuesLoading: !state.issuesLoading });
    }
    case types.SELECT_ISSUE: {
      // eslint-disable-next-line no-underscore-dangle
      const selected = state.list.filter(issue => issue.obj._id === action.id);
      return Object.assign({}, state, { selectedId: action.id, selected: selected });
    }
    case types.ISSUE_HIGHLIGHTED: {
      // eslint-disable-next-line no-underscore-dangle
      const highlighted = state.list.filter(issue => issue.obj._id === action.id);
      return Object.assign({}, state, { highlighted: highlighted[0] });
    }
    case types.UPVOTE_ISSUE: {
      console.log('upvoted:', state);
      const downvotedIndex = state.downvoted.indexOf(action.id);
      return Object.assign({}, state,
        { upvoted: state.upvoted.concat(action.id),
          downvoted: downvotedIndex === -1 ? state.downvoted : [...state.downvoted.slice(0, downvotedIndex), ...state.downvoted.slice(downvotedIndex + 1)],
        });
    }
    case types.DOWNVOTE_ISSUE: {
      console.log('downvoted:', state);
      const upvotedIndex = state.upvoted.indexOf(action.id);
      return Object.assign({}, state,
        {
          downvoted: state.downvoted.concat(action.id),
          upvoted: upvotedIndex === -1 ? state.upvoted : [...state.upvoted.slice(0, upvotedIndex), ...state.upvoted.slice(upvotedIndex + 1)],
        });
    }
    default:
      return state;
  }
};
