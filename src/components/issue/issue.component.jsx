import React from "react";
import "./issue.styles.scss";

const Issue = ({ issue: { title, id, priorityColor } }) => (
  <li style={{ backgroundColor: `#${priorityColor}` }} className="issue">
    <span className="issue__title">{title}</span>
    <span> #{id}</span>
  </li>
);

export default Issue;
