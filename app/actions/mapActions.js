import * as types from '../types';

export const mapBoundsChanged = (newMapInfo) => {
  return {
    newMapInfo,
    type: types.MAP_BOUNDS_CHANGED,
  };
};
