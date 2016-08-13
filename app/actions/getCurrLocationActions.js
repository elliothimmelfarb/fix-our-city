import { polyfill } from 'es6-promise';
import * as types from '../types';
import { addIssue } from '../api';

polyfill();

const setUserCurrLocation = (coords) => ({
    coords,
    type: types.GET_USER_LOCATION,
});

export const getCurrLocationActions = () => {
  return dispatch => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        if(res === undefined) {
          navigator.geolocation.getCurrentPosition(res2 => {
            dispatch(setUserLocation(res.coords));
          });
        }else{
          dispatch(setUserCurrLocation(res.coords));
        }

      });
    }
  }
}
