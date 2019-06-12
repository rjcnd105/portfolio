import { closeProject, fetchProject } from '../actions';
import { CLOSE_PROJECT, FETCH_PROJECT } from '../constants/ActionNames';
import { RootState } from '../types';

// const ROOT_URL = 'https://hoejun.s3.ap-northeast-2.amazonaws.com/project/';

const initialShowingProject = undefined;
export default function (state = initialShowingProject, action: {type: string, payload: any}) {
  switch (action.type) {
    case CLOSE_PROJECT:
      return;
    case FETCH_PROJECT:
      return;
  }
  return initialShowingProject;
};
