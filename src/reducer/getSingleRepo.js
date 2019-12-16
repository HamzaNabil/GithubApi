import { GET_SINGLE_REPO } from "../actions/types";

const getSingleRepo = (state = [], action) => {
  let singleRepo = null;
  switch (action.type) {
    case GET_SINGLE_REPO:
      singleRepo = action.name;
      return singleRepo;

    default:
      return state;
  }
};

export default getSingleRepo;
