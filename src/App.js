import { Provider } from "react-redux";
import Home from "./components/home/Home";
import store from './redux/store';

import './utilities/Normalize.scss';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
