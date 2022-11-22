// Redux >< React Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

let store = createStore(
  rootReducer,
  applyMiddleware(thunk) // sebagai middelware
);

export default store;
