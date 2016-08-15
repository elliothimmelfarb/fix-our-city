import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import map from './mapReducer';
import location from './locationReducer';
import issues from './issuesReducer';
import input from './inputReducer';
// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  issues,
  map,
  location,
  routing,
  input,
});

export default rootReducer;
