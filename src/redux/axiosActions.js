import {
  LOADING,
  GET_PROFILE,
  ERROR,
  POST_DATA
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
  }),
  postInfo: (data) => ({
    type: POST_DATA,
    payload: data
  })
}

const { loading, getData, error, postInfo } = actions;

const getDataAction = () => {

  const baseUrl = 'https://autodesk.free.beeceptor.com';
  const apiPath = '/users';
  const url = `${baseUrl}${apiPath}`;

  // const localPath = 'data.json';

  return dispatch => {
    dispatch(loading(true));
    _http.GET(url)
      .then((res) => {
        dispatch(getData(res))
        dispatch(loading(false));
      })
      .catch((e) => dispatch(error(e)));
  }
}

const postDataAction = (info) => {

  const baseUrl = 'https://autodesk.free.beeceptor.com';
  const apiPath = '/users';
  const url = `${baseUrl}${apiPath}`;

  // const localPath = 'data.json';

  return dispatch => {
    _http.POST(url, info)
      .then((res) => {
        dispatch(postInfo(res))
      })
      .catch((e) => dispatch(error(e)));
  }
}

export { getDataAction, postDataAction };
