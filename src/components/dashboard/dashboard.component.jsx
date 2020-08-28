import React, { Component } from "react";
import "./dashboard.styles.scss";
import Card from "../card/card.component";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          resolver: "sree",
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
          resolver: "sai",
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

  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__title">Daily Check In Dashboard</h1>
        <ul className="dashboard__cards">
          {this.state.data.map((el) => (
            <Card key={el.id} resolver={el.resolver} issues={el.issues} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
