import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import BrowserRouter from "react-router-dom/BrowserRouter";
import App from "./App/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Store/index";

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
