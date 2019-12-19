import http from "./httpService";
import { repos, singleRepo } from "../config";

const user = localStorage.getItem("username");
export const getRepos = () => {
  return http.get(`${repos}${user}/repos`);
};

export const getSingleRepo = name => {
  return http.get(`${singleRepo}${user}/${name}`);
};
