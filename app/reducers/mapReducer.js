import * as types from '../types';

const initialState = {
  zoom: 15,
  center: [37.639746, -121.800211],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INITIALIZE_MAP: {
      return console.log('map initialized');
    }
    default:
      return state;
  }
};
