import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";
import { Landing as LandingView, SignIn as SignInView } from "./views";
import Calendar from "./views/Calendar";
// import {
//     Landing as LandingView,
//     SignIn as SignInView,
//     NotFound as NotFoundView,
// } from "./views";

class NotFoundView extends React.Component {
  render() {
    return <h1>NotFoundView</h1>;
  }
}

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={LandingView}
        exact
        layout={MinimalLayout}
        path="/"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={Calendar}
        exact
        layout={MinimalLayout}
        path="/xyz"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
