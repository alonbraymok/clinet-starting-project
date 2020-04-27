import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import { Router } from "./router";

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
