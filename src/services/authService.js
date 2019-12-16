import http from "./httpService";
import { proxy, accessTokenUrl, userApi } from "../config";

export function login() {
  let code = window.location.href.split("?")[1].split("=")[1];
  http
    .post(`${proxy}${accessTokenUrl}`, {
      code: code,
      client_id: "45ab9329affa31b75695",
      client_secret: "641d9994d7c133446df1ab51c63a8941de456308",
      per_page: 5
    })
    .then(res => {
      const { data } = res;
      let token = data.split("&")[0].split("=")[1];
      const AuthStr = "Bearer ".concat(token);
      localStorage.setItem("token", token);
      setTimeout(() => (window.location = "/"), 1500);
      http
        .get(userApi, { headers: { Authorization: AuthStr } })
        .then(function(result) {
          localStorage.setItem("username", result.data.login);
        });
    });
}

export function logout() {
  localStorage.clear();
}
