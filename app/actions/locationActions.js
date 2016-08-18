import { polyfill } from 'es6-promise';
import * as types from '../types';
import { addIssue } from '../api';

polyfill();

export const setUserLocation = (coords) => ({
  coords,
  type: types.GET_USER_LOCATION,
});

const toggleLoading = () => ({
  type: types.TOGGLE_LOADING,
});

export const getUserLocation = () =>
  dispatch => {
    dispatch(toggleLoading());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        if (res === undefined) {
          navigator.geolocation.getCurrentPosition(() => {
            dispatch(setUserLocation(res.coords));
          });
        } else {
          dispatch(setUserLocation(res.coords));
        }
      });
    }
  };

export default {
  getUserLocation,
};
