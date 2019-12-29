import React from 'react';
import { Switch, Route } from "react-router-dom";
import Page404 from "./containers/Page404";
import Home from "./containers/Home";
import Favourites from "./containers/Favourites";
import {retrieveFromLocal} from "./storage/localStorage";

const Routes = () => {
    const favouriteMovies = retrieveFromLocal('favMovies');
  return (
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/favourites'} render={() => <Favourites favouriteMovies={favouriteMovies}/>} />
        <Route component={Page404} />
      </Switch>
  )
};
export default Routes;
