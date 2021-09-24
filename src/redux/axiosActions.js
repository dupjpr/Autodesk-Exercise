import {
  LOADING,
  GET_PROFILE,
  ERROR
} from '../utilities/constants';
import { _http } from "../utilities/httpRequest";


const actions = {
  loading: (boolean = false) => ({
    type: LOADING,
    payload: boolean
  }),
  getData: (data) => ({
    type: GET_PROFILE,
    payload: data
  }),
  error: (data) => ({
    type: ERROR,
    payload: data
  })
}

const { loading, getData, error } = actions;

const getDataAction = () => {

  const baseUrl = 'https://autodesk.free.beeceptor.com';
  const apiPath = '/users';
  const demoUrl = `${baseUrl}${apiPath}`;

  return dispatch => {
    dispatch(loading(true));
    _http.GET(demoUrl)
      .then((res) => {
        dispatch(getData(res))
        dispatch(loading(false));
      })
      .catch((e) => dispatch(error(e)));
  }
}

export { getDataAction };
