import { CLOSE_PROJECT, FETCH_PROJECT } from '../constants/ActionNames';
import { RootState } from '../types';


const initialShowingProject = null;

export default function (state = initialShowingProject, action: {type: string, payload: any}) {
  console.log('aaa');
  switch (action.type) {
    case CLOSE_PROJECT:
      return null;
    case FETCH_PROJECT:
      console.log(action.payload);
      return;
      // return action.payload;
  }
  return initialShowingProject;
};
