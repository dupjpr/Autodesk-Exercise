import {
  LOADING,
  GET_PROFILE,
  ERROR,
  TAB_SELECT
} from '../../utilities/constants';

const rootReducer = (state, action) => {

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case GET_PROFILE:
      return {
        ...state,
        dataRequest: action.payload,
        dataDisplay: action.payload.data
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case TAB_SELECT:
      return {
        ...state,
        statusTabs: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;
