import React, { Component } from "react";
import "./dashboard.styles.scss";
import Card from "../card/card.component";
import { filterIssues } from "./dashboard.util.js";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      currentIssues: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/DataChatAI/ExampleRepository/issues")
      .then((res) => res.json())
      .then((res) => this.setState({ currentIssues: filterIssues(res) }));
  }

  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__title">Daily Check In Dashboard</h1>
        <ul className="dashboard__cards">
          {this.state.currentIssues.map((el) => (
            <Card key={el.id} assignee={el.name} issues={el.issues} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
