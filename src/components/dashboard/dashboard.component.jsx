import React from "react";
import "./dashboard.styles.scss";
import { Component } from "react";
import Card from "../card/card.component";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Daily Check In Dashboard</h1>
        <Card />
      </div>
    );
  }
}

export default Dashboard;
