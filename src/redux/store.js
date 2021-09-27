import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  dataRequest: '',
  dataDisplay: '',
  loading: true,
  statusTabs: { tabOne: true, tabTwo: false },
  searchInput: '',
  submitForm: '',
  modalState: false,
  modalInputs:{
    inputOne: '',
    inputTwo: '',
    inputThree: '',
    inputFour: 'Select an option',
    inputFive: 'Select an option',
  },
  modalSubmit:''
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
