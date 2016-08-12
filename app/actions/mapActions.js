import { polyfill } from 'es6-promise';
import * as types from '../types';
import { findIssues } from '../api';

polyfill();

const updateMapInfo = (newMapInfo, issues) => ({
  newMapInfo,
  issues,
  type: types.UPDATE_MAP_DATA,
});

export const mapBoundsChanged = (newMapInfo) =>
  dispatch => {
    findIssues(newMapInfo.center, newMapInfo.bounds.nw)
    .then(response => {
      newMapInfo.radius = response.data.radius; // eslint-disable-line no-param-reassign
      dispatch(updateMapInfo(newMapInfo, response.data.issues));
    });
  };
