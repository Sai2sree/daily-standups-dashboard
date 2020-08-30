import React, { Component } from "react";
import "./dashboard.styles.scss";
import Card from "../card/card.component";
import { connect } from "react-redux";
import { fetchIssuesStartAsync } from "../../redux/issue/issue.action";

class Dashboard extends Component {
  componentDidMount() {
    const { fetchIssuesStartAsync } = this.props;
    fetchIssuesStartAsync();
  }

  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__title">Daily Check In Dashboard</h1>
        <ul className="dashboard__cards">
          {this.props.currentIssues.map((el) => (
            <Card key={el.id} assignee={el.name} issues={el.issues} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentIssues: state.issue.currentIssues,
});

const dispatchStateToProps = (dispatch) => ({
  fetchIssuesStartAsync: () => dispatch(fetchIssuesStartAsync()),
});

export default connect(mapStateToProps, dispatchStateToProps)(Dashboard);
