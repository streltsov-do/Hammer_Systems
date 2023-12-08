import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Clients = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/list`} />
      <Route path={`${match.url}/:list/:id`} component={lazy(() => import(`./list/UserEdit`))} />
      <Route exact path={`${match.url}/:list`} component={lazy(() => import(`./list`))} />
      {/* <Route path={`${match.url}/profile`} component={lazy(() => import(`./profile`))} /> */}
      {/* <Route path={`${match.url}/group`} component={lazy(() => import(`./group`))} /> */}
    </Switch>
  </Suspense>
);

export default Clients;