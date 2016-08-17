import { polyfill } from 'es6-promise';
import * as types from '../types';


polyfill();

export const inputTitle = (title) => ({
  title,
  type: types.INPUT_ISSUE_TITLE,
});
export const inputDescription = (description) => ({
  description,
  type: types.INPUT_ISSUE_DESCRIPTION,
});
export const clearInputs = () => ({
  type: types.CLEAR_INPUT,
});
export const inputLocation = (val) => ({
  val,
  type: types.INPUT_LOCATION,
});
