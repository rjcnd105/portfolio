import { combineReducers } from 'redux';
import showingProjectReducer from './reducer_showingProject';

const rootReducer = combineReducers({
  showingProject: showingProjectReducer
});

export default rootReducer;
