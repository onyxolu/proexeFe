import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ConnectedRouter } from "connected-react-router";
import { getHistory } from "../index";
import { UserRoute } from "./RouteComponents";

/* eslint-disable */
import ErrorPage from "../pages/templates/error";
/* eslint-enable */

import "../styles/theme.scss";
import AdminLayout from "../pages/private/AdminLayout/AdminLayout";

const CloseButton = ({ closeToast }) => (
  <i onClick={closeToast} className="la la-close notifications-close" />
);

class App extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <ToastContainer
          autoClose={5000}
          hideProgressBar
          closeButton={<CloseButton />}
        />
        <ConnectedRouter history={getHistory()}>
          <HashRouter>
            <Switch>
              <UserRoute
                path="/admin"
                dispatch={this.props.dispatch}
                component={AdminLayout}
              />
              <UserRoute
                path="/user"
                dispatch={this.props.dispatch}
                component={AdminLayout}
              />
              <Route path="/error" exact component={ErrorPage} />
              <Redirect from="*" to="/admin" />
            </Switch>
          </HashRouter>
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({});

export default connect(mapStateToProps)(App);
