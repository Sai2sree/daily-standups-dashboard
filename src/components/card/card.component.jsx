import React from "react";
import "./card.styles.scss";
import Issue from "../issue/issue.component";

const Card = ({ assignee, issues }) => {
  return (
    <div className="card">
      <div className="card__title">@{assignee}</div>
      <ul className="card_list">
        {issues.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </ul>
    </div>
  );
};

export default Card;
