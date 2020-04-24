import React, { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectJobs } from "../../redux/panel/panel.selector";
import { setJob } from "../../redux/panel/panel.actions";

import JobCard from "../job-card/jobCard.component";
import SelectCandidateModal from "../select-candidate-modal/select-candidate-modal.component";

import { JobPanelContainer } from "./jobPanel.style";

// when this component is rendered, it takes the Jobs state from the store,
// and then render different job types based on the category parameter.

const JobPanel = ({ match, job }) => {
  return (
    <JobPanelContainer>
      {Object.keys(job[`${match.params.category}`]).length > 0 ? (
        Object.keys(job[`${match.params.category}`]).map((value, index) => (
          <JobCard
            key={index}
            job={job[`${match.params.category}`][value]}
            category={match.params.category}
          />
        ))
      ) : (
        <h4>No {match.params.category} Jobs </h4>
      )}

      {/* component is rendered when showModal state is true, otherwise it remains hidden.
      This component can be made robust by adding the type of modal it should be. */}
      <SelectCandidateModal />
    </JobPanelContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  job: selectJobs,
});

const mapDispatchToProps = (dispatch) => ({
  setJob: (category) => dispatch(setJob(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobPanel);
