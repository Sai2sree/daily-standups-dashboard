import React from "react";
import { IssueTitleContainer, IssueContainer } from "./issue.styles";

const Issue = ({ issue: { title, id, priorityColor } }) => (
  <IssueContainer priorityColor={priorityColor}>
    <IssueTitleContainer>{title}</IssueTitleContainer>
    <span> #{id}</span>
  </IssueContainer>
);

export default Issue;
