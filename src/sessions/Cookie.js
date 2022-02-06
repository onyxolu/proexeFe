import config from "../config";

export const getToken = () => localStorage.getItem(config.appTokenName);

export const setToken = (token) => {
  localStorage.setItem(config.appTokenName, token);
};

export const removeToken = () => {
  localStorage.removeItem(config.appTokenName);
};

export const isTokenExpired = (tokenExpiry) => {
  let currentDate = Date.now() / 1000;
  return currentDate > tokenExpiry;
};

export const getUserDataFromToken = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
