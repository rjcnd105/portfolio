import { CLOSE_PROJECT, SELECT_PROJECT } from '../constants/ActionNames';
import { RootState } from '../types';


const initialShowingProject = null;

export default function (state = initialShowingProject, action: {type: string, payload: any}) {
  console.log('reducers', action.type, action.payload);
  switch (action.type) {
    case CLOSE_PROJECT:
      return null;
    case SELECT_PROJECT:
      return action.payload;
      // return action.payload;
  }
  return initialShowingProject;
};
