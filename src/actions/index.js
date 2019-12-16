import { GET_REPOS, GET_SINGLE_REPO } from "./types";

// get all repos
export const get_repos = data => {
  return {
    type: GET_REPOS,
    data
  };
};

// get single repo
export const get_single_repo = name => {
  return {
    type: GET_SINGLE_REPO,
    name
  };
};
