import * as types from '../types';

const initialState = {
  tags: ['Broken', 'Potholes', 'Overgrown', 'Dangerous', 'Vandalism', 'Fallen'],
  selectedTag: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_TAG: {
      return Object.assign({}, state, { selectedTag: action.tag });
    }
    default:
      return state;
  }
};
