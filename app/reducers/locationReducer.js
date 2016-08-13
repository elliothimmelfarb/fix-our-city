import * as types from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_USER_LOCATION: {
      return Object.assign(
        {},
        state,
        { location: {lat: action.coords.latitude, lng: action.coords.longitude}  }
      );
    }
    default:
      return state;
  }
};
