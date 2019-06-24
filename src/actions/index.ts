import axios from 'axios';
import * as types from '../constants/ActionNames'
import { ProjectData } from '../types';

export const fetchProject =
  (url: string) => ({
    type: types.FETCH_PROJECT, payload: axios.get(url, {
      headers: {
        'method': 'GET',
        'Access-Control-Allow-Origin': '*',
      },
    })
  });
export const openProject = (projectData: ProjectData) => ({ type: types.SELECT_PROJECT, payload: projectData });
export const closeProject =
  () => ({ type: types.CLOSE_PROJECT });
