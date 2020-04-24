import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { NavigationContainer, NavigationLinkContainer } from "./sidebar.style";

import { setJob } from "../../redux/panel/panel.actions";
import {
  selectJobCount,
  selectCandidateCount,
} from "../../redux/panel/panel.selector";

/* 
Simple component which renders Link to different components.
*/
const Sidebar = ({ count, candidates }) => {
  return (
    <NavigationContainer>
      <NavigationLinkContainer>
        <h3 className="tab">Navigation</h3>
        <Link to="/dashboard" className="tab">
          <span>Dashboard</span>
        </Link>
        <Link to="/candidates" className="tab">
          <span>Candidates</span>
          <span className="count">{candidates}</span>
        </Link>
      </NavigationLinkContainer>
      <NavigationLinkContainer>
        <h3>Jobs</h3>
        <Link to="/jobs/live" className="tab">
          <span>Live</span>
          <span className="count">{count[0]}</span>
        </Link>
        <Link to="/jobs/accepted" className="tab">
          <span>Accepted</span>
          <span className="count">{count[1]}</span>
        </Link>
        <Link to="/jobs/rejected" className="tab">
          <span>Rejected</span>
          <span className="count">{count[2]}</span>
        </Link>
      </NavigationLinkContainer>
      <NavigationLinkContainer>
        <h3 className="tab">Support</h3>
        <p className="tab">Tutorial</p>
        <p className="tab">Feedback</p>
      </NavigationLinkContainer>
    </NavigationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  count: selectJobCount,
  candidates: selectCandidateCount,
});

const mapDispatchToProps = (dispatch) => ({
  setJob: (category) => dispatch(setJob(category)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
