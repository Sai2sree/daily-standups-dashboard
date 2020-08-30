import issueActionTypes from "./issue.types";

export const setCurrentIssues = (issues) => ({
  type: issueActionTypes.SET_CURRENT_ISSUES,
  payload: issues,
});
