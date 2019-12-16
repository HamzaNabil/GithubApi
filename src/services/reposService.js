import http from "./httpService";
import { repos, singleRepo } from "../config";

export const getRepos = () => {
  return http.get(repos);
};

export const getSingleRepo = name => {
  return http.get(`${singleRepo}/${name}`);
};
