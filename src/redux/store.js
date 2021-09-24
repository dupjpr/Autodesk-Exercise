import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  dataRequest: '',
  dataDisplay: '',
  loading: false,
  statusTabs: { tabOne: true, tabTwo: false },
  searchInput: '',
  submitForm: '',
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
