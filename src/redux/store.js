import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const initialState = {
  data: '',
  loading: false,
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
