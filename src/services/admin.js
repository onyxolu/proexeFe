import axios from "axios";
import { getToken } from "../sessions/Cookie";

const baseUrl =
  "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

const accessToken = getToken();

function AdminService() {
  this.accessToken = accessToken;
}

////////----- Handle Errors   ----//////////

AdminService.prototype.handleError = (err) => {
  if (err.response) {
    return err.response.data.message;
  } else {
    return "Something went wrong, please try again later";
  }
};

///////-----  User AUth   -----///////////

AdminService.prototype.upsertUser = function (data) {
  let url = `${baseUrl}`;

  const config = {
    timeout: 20000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  };

  return axios.post(url, data, config);
};

AdminService.prototype.getAllUsers = function () {
  let url = `${baseUrl}`;

  const config = {
    timeout: 20000,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
      // "Access-Control-Allow-Methods": "*",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Headers": "*",
    },
  };

  return axios.get(url, config);
};

AdminService.prototype.deleteUser = function (id) {
  let url = `${baseUrl}/${id}`;
  axios.delete(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

const instance = new AdminService();

export default instance;
