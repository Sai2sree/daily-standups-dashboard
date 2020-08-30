import React from "react";
import Issue from "../issue/issue.component";
import {
  CardContainer,
  CardTitleContainer,
  CardListContainer,
} from "./card.styles";

const Card = ({ assignee, issues }) => (
  <CardContainer>
    <CardTitleContainer>@{assignee}</CardTitleContainer>
    <CardListContainer>
      {issues.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </CardListContainer>
  </CardContainer>
);

export default Card;
