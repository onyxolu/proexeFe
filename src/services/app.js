import axios from "axios";
import React from "react";
import { Button } from "reactstrap";
import { toast } from "react-toastify";

const baseUrl = "http://3.10.80.41:8080/nucleus/api/v1/";

const loginUrl = "http://3.10.80.41:9090/";
const clientId = "bnVjbGV1cy1wYXNzcG9ydDpzZWNyZXQ=";

const accessToken = localStorage.getItem("token");

const options = {
  position: "top-right",
  autoClose: 5000,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
};

function AppService() {
  this.accessToken = accessToken;
}

////////----- Handle Errors   ----//////////

AppService.prototype.successToast = function (message) {
  return toast.success(message, options);
};

AppService.prototype.errorToast = function (message) {
  return toast.error(
    <div>
      {message} <br />
      <Button
        onClick={() => retryNotification()}
        outline
        color="default"
        size="xs"
        className="width-100 mb-xs mr-xs mt-1"
      >
        Retry
      </Button>
    </div>
  );
};

AppService.prototype.handleError = (err) => {
  let message = "";
  if (err.response) {
    message = err.response.data.message;
  } else {
    message = "Something went wrong, please try again later";
  }
  AppService.prototype.errorToast(message);
};

AppService.prototype.login = function (data) {
  let url = `${loginUrl}oauth/token`;

  const config = {
    timeout: 20000,
    headers: {
      // "Content-Type": "application/x-www.form-urlencoded",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${clientId}`,
    },
  };
  const params = new URLSearchParams();
  params.append("username", data.username);
  params.append("password", data.password);
  params.append("grant_type", "password");

  return axios.post(url, params, config);
};

///////-----  User AUth   -----///////////

AppService.prototype.signUp = function (data) {
  let url = `${baseUrl}/api/v1/user/create`;

  const config = {
    timeout: 60000,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.post(url, data, config);
};

AppService.prototype.resetPassword = function (data) {
  let url = `/api/v1/user/reset-password`;

  const config = {
    timeout: 20000,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios.get(url, data, config);
};

AppService.prototype.verifySubDomain = function (subdomain) {
  let url = `${baseUrl}hmo/sub-domain/${subdomain}`;

  const config = {
    timeout: 20000,
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Headers": "*",
      // Authorization: `Bearer ${getToken()}`,
    },
  };

  return axios.get(url, config);
};

const retryNotification = (id) =>
  toast.update(id, {
    ...options,
    render: "Alien planet destroyed!",
    type: toast.TYPE.SUCCESS,
  });

const instance = new AppService();

export default instance;
