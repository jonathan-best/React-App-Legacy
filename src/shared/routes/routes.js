import React from 'react';
import { DefaultRoute, Route, RouteHandler } from 'react-router';
import AppController from "../controllers/AppController";
import PageHandler from "../handlers/PageHandler";

export default (
  <Route component={AppController}>
    <Route path="/" component={PageHandler} />
    <Route path="/test" component={PageHandler} />
  </Route>
);
