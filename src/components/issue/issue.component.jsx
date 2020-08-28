import React from "react";
import "./issue.styles.scss";

const Issue = ({ issue: { title, id, color } }) => (
  <li style={{ backgroundColor: color }} className="issue">
    <span>{title}</span>
    <span> #{id}</span>
  </li>
);

export default Issue;
