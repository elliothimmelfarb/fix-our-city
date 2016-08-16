import * as types from '../types';

export const highlightIssue = (id) => ({
  id,
  type: types.ISSUE_HIGHLIGHTED,
});

export default {
  highlightIssue,
};
