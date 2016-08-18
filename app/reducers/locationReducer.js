import * as types from '../types';

export default (state = { loading: false, location: {}, alert: false }, action) => {
  switch (action.type) {
    case types.GET_USER_LOCATION: {
      return Object.assign(
        {},
        state,
        { location: { lat: action.coords.latitude, lng: action.coords.longitude }, loading: false }
      );
    }
    case types.TOGGLE_LOADING: {
      return Object.assign(
        {},
        state,
        { loading: !state.loading }
      );
    }
    case types.CLEAR_INPUT: {
      return Object.assign(
        {},
        state,
        { location: {} }
      );
    }
    case types.TOGGLE_ALERT: {
      return Object.assign(
        {},
        state,
        { alert: !state.alert }
      );
    }
    default:
      return state;
  }
};
