import styled from "styled-components";

export const IssueContainer = styled.li`
  display: flex;
  list-style-type: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  max-width: 80%;
  padding: 16px;
  margin: 16px 0 0 auto;
  text-align: left;
`;

export const IssueTitleContainer = styled.span`
  max-width: 80%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 4px;
`;
