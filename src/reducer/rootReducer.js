import getRepos from "./getRepos";
import getSingleRepo from "./getSingleRepo";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  repos: getRepos,
  singleRepo: getSingleRepo
});

export default rootReducer;
