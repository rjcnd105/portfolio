import axios from 'axios';
import * as types from '../constants/ActionNames'

export const fetchProject =
  (url: string) => ({ type: types.FETCH_PROJECT, payload: axios.get(url) });
export const closeProject =
  () => ({ type: types.CLOSE_PROJECT });
