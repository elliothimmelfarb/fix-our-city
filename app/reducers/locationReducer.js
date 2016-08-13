import * as types from '../types';

export default (state = { isLoading: false, location: {} }, action) => {
  switch (action.type) {
    case types.GET_USER_LOCATION: {
      console.log('action.coords', action.coords);
      return Object.assign(
        {},
        state,
        { location: { lat: action.coords.latitude, lng: action.coords.longitude } }
      );
    }
    default:
      return state;
  }
};
