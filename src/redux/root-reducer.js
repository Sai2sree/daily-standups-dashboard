import { combineReducers } from "redux";
import issueReducer from "./issue/issue.reducer";

export default combineReducers({ issue: issueReducer });
