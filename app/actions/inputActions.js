import { polyfill } from 'es6-promise';
import * as types from '../types';


polyfill();

const issueTitle = (title) => ({
  title,
  type: types.INPUT_ISSUE_TITLE,
})
const issueDescription = (description) => ({
  description,
  type: types.INPUT_ISSUE_DESCRIPTION,
})

export const inputTitle = (title) => {
  return dispatch => {
    dispatch(issueTitle(title));
  };
};

export const inputDescription = (description) => {
  return dispatch => {
    dispatch(issueDescription(description));
  };
};
