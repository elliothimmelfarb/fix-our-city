import { polyfill } from 'es6-promise';
import * as types from '../types';
import { addIssue } from '../api';

polyfill();

const addNewIssue = (issue) => ({
  issue,
  type: types.ADD_NEW_ISSUE,
});

const setUserLocation = (coords) => ({
  coords,
  type: types.GET_USER_LOCATION,
});

// export const addNewIssueAction = (issue) =>
//   dispatch => {
//     addIssue(issue)
//     .then(response => {
//       newMapInfo.radius = response.data.radius; // eslint-disable-line no-param-reassign
//       dispatch(addNewIssue(newMapInfo, response.data.issues));
//     });
//   };

export const getUserLocation = () => {
    return dispatch => {
      // dispatch(toggleLoading());
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(res => {
          if (res === undefined) {
            navigator.geolocation.getCurrentPosition(res2 => {
              dispatch(setUserLocation(res.coords));
            });
          } else{
            dispatch(setUserLocation(res.coords));
            // dispatch(toggleLoading());
          }
        });
      }
    };
  }
