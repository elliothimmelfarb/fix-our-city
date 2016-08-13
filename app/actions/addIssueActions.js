import { polyfill } from 'es6-promise';
import * as types from '../types';
import { addIssue } from '../api';

polyfill();

const addNewIssue = (issue) => ({
  issue,
  type: types.ADD_NEW_ISSUE,
});
