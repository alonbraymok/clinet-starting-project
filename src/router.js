import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";

const Router = () => {
  console.log("df");
  return (
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  );
};

export { Router };
