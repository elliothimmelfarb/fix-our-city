import { polyfill } from 'es6-promise';
import * as types from '../types';
import { findIssues } from '../api';

polyfill();

const updateMapData = (newMapInfo, issues) => ({
  newMapInfo,
  issues,
  type: types.UPDATE_MAP_DATA,
});

const issuesLoading = () => ({
  type: types.ISSUES_LOADING,
});

export const selectMarker = (id) => ({
  id,
  type: types.SELECT_ISSUE,
});

export const mapBoundsChanged = (newMapInfo) =>
  dispatch => {
    dispatch(issuesLoading());
    findIssues(newMapInfo.center, newMapInfo.bounds.nw)
    .then(response => {
      newMapInfo.radius = response.data.radius; // eslint-disable-line no-param-reassign
      dispatch(updateMapData(newMapInfo, response.data.issues));
    });
  };
