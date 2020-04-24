import React from "react";
import { connect } from "react-redux";

import { ButtonBarConatiner, Button } from "./custom-button-bar.style";
import { addJob, deleteJob, toggel } from "../../redux/panel/panel.actions";

/*
-renders different type of button based on the type of jobs
-for ex:  for live jobs--- accept and reject button
          for accepted jobs--- Add candidate Button
          
- each button fires specified actions.
*/

const CustomButtonBar = ({ category, job, addJob, deleteJob, toggel }) => {
  if (category == "live") {
    return (
      <ButtonBarConatiner>
        <Button type="button" onClick={() => addJob(job.id)}>
          Accept
        </Button>
        <Button onClick={() => deleteJob(job.id)}>Reject</Button>
      </ButtonBarConatiner>
    );
  } else if (category == "accepted") {
    return (
      <ButtonBarConatiner>
        <Button onClick={() => toggel(job)}>Add Candidate</Button>
      </ButtonBarConatiner>
    );
  } else {
    return (
      <ButtonBarConatiner>
        <Button disabled>Rejected</Button>
      </ButtonBarConatiner>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  addJob: (id) => dispatch(addJob(id)),
  deleteJob: (id) => dispatch(deleteJob(id)),
  toggel: (job) => dispatch(toggel(job)),
});

export default connect(null, mapDispatchToProps)(CustomButtonBar);
