import { CLOSE_PROJECT, SELECT_PROJECT } from '../constants/ActionNames';
import { ShowingProject } from '../types';

type actionReturn<P = undefined> = {
  type: string,
  payload?: P
}

export type SetShowingProject= (sp: ShowingProject) => actionReturn<ShowingProject>
export type CloseProject= () => actionReturn

export const setShowingProject: SetShowingProject = (showingProject) => ({ type: SELECT_PROJECT, payload: showingProject });
export const closeProject: CloseProject = () => ({ type: CLOSE_PROJECT });
