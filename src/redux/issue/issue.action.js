import IssueActionTypes from "./issue.types";

export const fetchIssuesStart = () => ({
  type: IssueActionTypes.FETCH_ISSUES_START,
});

export const fetchIssuesSuccess = (IssuesMap) => ({
  type: IssueActionTypes.FETCH_ISSUES_SUCCESS,
  payload: IssuesMap,
});

export const fetchIssuesFailure = (errorMessage) => ({
  type: IssueActionTypes.FETCH_ISSUES_SUCCESS,
  payload: errorMessage,
});

export const fetchIssuesStartAsync = () => {
  return (dispatch) => {
    fetch("https://api.github.com/repos/DataChatAI/ExampleRepository/issues")
      .then((res) => res.json())
      .then((result) => dispatch(fetchIssuesSuccess(result)))
      .catch((error) => dispatch(fetchIssuesFailure(error.message)));
  };
};
