import React, { Component } from "react";
import "./dashboard.styles.scss";
import Card from "../card/card.component";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/DataChatAI/ExampleRepository/issues")
      .then((res) => res.json())
      .then((res) => {
        let assignees = {};
        res.forEach((issue) => {
          let today = new Date();
          let twoMonthsOldDate = today.setMonth(today.getMonth() - 2);
          let issueCreationDate = issue["created_at"];
          if (Date.parse(issueCreationDate) > twoMonthsOldDate) {
            let assignee = issue.assignee;
            if (assignee) {
              let issues = [];
              let priorityColor = "";
              issue.labels.forEach((label) => {
                if (label.name === "I'm On It!") {
                  issues.push({
                    title: issue.title,
                    id: issue.id,
                    priorityColor: "",
                  });
                } else {
                  if (label.name.includes("Priority")) {
                    priorityColor = label.color;
                  }
                }
              });
              if (issues.length) {
                issues[0].priorityColor = priorityColor;
              }
              if (assignees[assignee.login]) {
                assignees[assignee.login].issues.push(...issues);
              } else {
                assignees[assignee.login] = {
                  id: assignee.id,
                  name: assignee.login,
                  issues: issues,
                };
              }
            }
          }
        });
        this.setState({ data: Object.values(assignees) });
      });
  }

  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__title">Daily Check In Dashboard</h1>
        <ul className="dashboard__cards">
          {this.state.data.map((el) => (
            <Card key={el.id} assignee={el.name} issues={el.issues} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
