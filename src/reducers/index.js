import { combineReducers } from "redux";
import navigation from "./navigation";
import alerts from "./alerts";
import users from "./usersReducers";
import { connectRouter } from "connected-react-router";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    alerts,
    navigation,
    users,
  });
