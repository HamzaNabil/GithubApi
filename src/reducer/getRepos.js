import { GET_REPOS } from "../actions/types";

const repos = (state = [], action) => {
  let repos = null;
  switch (action.type) {
    case GET_REPOS:
      repos = action.data.data;
      return repos;

    default:
      return state;
  }
};

export default repos;
