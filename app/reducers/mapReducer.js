import * as types from '../types';

const initialState = {
  zoom: 15,
  center: { lat: 37.639746, lng: -121.80093 },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MAP_DATA: {
      const { bounds, center, size, zoom, marginBounds } = action.newMapInfo;
      return Object.assign(
        {},
        state,
        { bounds, center, size, zoom, marginBounds }
      );
    }
    case types.GET_USER_LOCATION: {
      return Object.assign(
        {},
        state,
        { center: { lat: action.coords.latitude, lng: action.coords.longitude } }
      );
    }
    default:
      return state;
  }
};
