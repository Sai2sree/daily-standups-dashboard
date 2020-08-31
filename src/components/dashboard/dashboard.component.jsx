import React, { useEffect, useState } from "react";
import "./dashboard.styles.scss";
import Card from "../card/card.component";
import { connect } from "react-redux";
import { fetchIssuesStartAsync } from "../../redux/issue/issue.action";

const Dashboard = ({ fetchIssuesStartAsync, currentIssues }) => {
  const [repository] = useState("ExampleRepository");
  const [endPoint] = useState(
    `https://api.github.com/repos/DataChatAI/${repository}/issues`
  );

  useEffect(() => {
    fetchIssuesStartAsync(endPoint);
  }, [fetchIssuesStartAsync, endPoint]);

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Daily Check In Dashboard</h1>
      <ul className="dashboard__cards">
        {currentIssues.map((el) => (
          <Card key={el.id} assignee={el.name} issues={el.issues} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentIssues: state.issue.currentIssues,
});

const dispatchStateToProps = (dispatch) => ({
  fetchIssuesStartAsync: (endPoint) =>
    dispatch(fetchIssuesStartAsync(endPoint)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Dashboard);
