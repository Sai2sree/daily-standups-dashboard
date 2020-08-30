import issueActionTypes from "./issue.types";
import { filterIssues } from "./issue.util";

const INITIAL_STATE = {
  currentIssues: [],
};

const issueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case issueActionTypes.SET_CURRENT_ISSUES:
      return {
        ...state,
        currentIssues: filterIssues(action.payload),
      };
    default:
      return state;
  }
};

export default issueReducer;
