import React from 'react';
import { Switch, Route } from "react-router-dom";
import Page404 from "./containers/Page404";
import Home from "./containers/Home";

const Routes = () => {

  return (
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route component={Page404} />
      </Switch>
  )
};
export default Routes;
