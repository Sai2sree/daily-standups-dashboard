import React, { Component } from "react";
import "./dashboard.styles.scss";
import Card from "../card/card.component";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "sree",
          id: 4567,
          issues: [
            {
              title: "Medium priority issue",
              id: 12345,
              color: "#f9d0c4",
            },
          ],
        },
        {
          name: "sai",
          id: 45679,
          issues: [
            {
              title: "High priority issue",
              id: 123458,
              color: "#b60205",
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/DataChatAI/ExampleRepository/issues")
      .then((res) => res.json())
      .then((res) => {
        let assignees = {};
        res.forEach((issue) => {
          let assignee = issue.assignee;
          if (assignee) {
            let issues = [];
            issue.labels.forEach((label) => {
              if (label.name === "I'm On It!") {
                issues.push({
                  title: issue.title,
                  id: issue.id,
                  priorityColor: "",
                });
              }
            });
            if (issues.length) {
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
        //console.log(Object.values(assignees));
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
