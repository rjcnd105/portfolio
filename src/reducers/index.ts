import { combineReducers } from 'redux';
import projectData from '../constants/projectData';
import toyProjectData from '../constants/toyProjectData';
import showingProjectReducer from './reducer_showingProject';

const rootReducer = combineReducers({
  showingProject: showingProjectReducer,
  projectList: () => projectData,
  toyProjectList: () => toyProjectData,
});

export default rootReducer;
