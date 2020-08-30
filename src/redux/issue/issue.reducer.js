import IssueActionTypes from "./issue.types";
import { filterIssues } from "./issue.util";

const INITIAL_STATE = {
  currentIssues: [],
  isFetching: true,
  errorMessage: "",
};

const issueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IssueActionTypes.FETCH_ISSUES_START:
      return { ...state, isFetching: true };
    case IssueActionTypes.FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        currentIssues: filterIssues(action.payload),
        isFetching: false,
      };
    case IssueActionTypes.FETCH_ISSUES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default issueReducer;
