import {
  LOADING,
  GET_PROFILE,
  ERROR,
  TAB_SELECT,
  INPUT_SEARCH,
  SUBMIT_FORM,
  TABLE_INFO,
  MODAL_STATUS,
  MODAL_INPUT,
  MODAL_SUBMIT 
} from '../../utilities/constants';
import store from '../store';

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
    case INPUT_SEARCH:
      return {
        ...state,
        searchInput: action.payload
      }
    case  SUBMIT_FORM:
      return {
        ...state,
        submitForm: action.payload
      }
    case  TABLE_INFO:
      return {
        ...state,
        dataDisplay: action.payload
      }
    case  MODAL_STATUS:
      return {
        ...state,
        modalState: action.payload
      }
    case   MODAL_INPUT:
      return {
        ...state,
        modalInputs: {...state.modalInputs, ...action.payload}
      }
    case   MODAL_SUBMIT:
      return {
        ...state,
        modalSubmit: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;
