import { Route } from "react-router";
import React from "react";

export const AdminRoute = ({ currentUser, dispatch, component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => React.createElement(component, props)}
    />
  );
};

export const UserRoute = ({ dispatch, component, ...rest }) => {
  return (
    // eslint-disable-line
    <Route
      {...rest}
      render={(props) => React.createElement(component, props)}
    />
  );
};
