import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReudcer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReudcer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
