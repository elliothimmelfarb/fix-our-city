import { polyfill } from 'es6-promise';
import { upvote, downvote, toggleFixed } from '../api';
import * as types from '../types';

polyfill();


export const highlightIssue = (id) => ({
  id,
  type: types.ISSUE_HIGHLIGHTED,
});


const updateIssues = (issues) => ({
  issues,
  type: types.UPDATE_ISSUES,
});

const addToUpvoted = (id) => ({
  id,
  type: types.UPVOTE_ISSUE,
});

const addToDownvoted = (id) => ({
  id,
  type: types.DOWNVOTE_ISSUE,
});

export const downvoteIssue = (id, center, corner) =>
  dispatch => {
    downvote(id, center, corner)
    .then(response => {
      dispatch(updateIssues(response.data.issues));
      dispatch(addToDownvoted(id));
    });
  };

export const selectIssue = (id) => ({
  id,
  type: types.SELECT_ISSUE,
});

export const toggleFixedIssue = (id, center, corner) =>
  dispatch => {
    toggleFixed(id, center, corner)
    .then(response => {
      dispatch(updateIssues(response.data.issues));
    });
  };

export const upvoteIssue = (id, center, corner) =>
  dispatch => {
    console.log('cneter corner:', center, corner);
    upvote(id, center, corner)
    .then(response => {
      console.log('res data:', response.data);
      dispatch(updateIssues(response.data.issues));
      dispatch(addToUpvoted(id));
    });
  };

export default {
  highlightIssue,
  upvoteIssue,
  downvoteIssue,
  toggleFixedIssue,
};
