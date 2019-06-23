import { combineReducers } from 'redux';
import showingProjectReducer from './reducer_showingProject';
import projectData from "../constants/projectData";
import toyProjectData from "../constants/toyProjectData";

const rootReducer = combineReducers({
  showingProject: showingProjectReducer,
  projectList: () => projectData,
  toyProjectList: () => toyProjectData,
});

export default rootReducer;
