import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCandidateModal,
  selectSelectedJob,
  selectCandidates,
} from "../../redux/panel/panel.selector";
import { toggel, addCandidate } from "../../redux/panel/panel.actions";

import {
  ModalOuterBox,
  ModalContainer,
  Select,
  InputContainer,
  Button,
  Option,
  ModalHeadConatiner,
} from "./select-candidate-modal.style";

const SelectCandidateModal = ({
  showModal,
  currentJob,
  candidates,
  toggel,
  addCandidate,
}) => {
  //function to assign a candidate the job and to reduce candidate count from accepted jobs.
  const update = () => {
    const option = document.getElementById("candidates");
    if (currentJob.no_candidates > 0) addCandidate(currentJob.id, option.value);
  };

  // Toggel what's to render based on the showModal value
  if (showModal) {
    return (
      <div>
        {/*ModalOuterBox is a overlay*/}
        <ModalOuterBox />
        <ModalContainer>
          <ModalHeadConatiner>
            <h2>{currentJob.title}</h2>
            <i class="far fa fa-times-circle" onClick={() => toggel({})}></i>
          </ModalHeadConatiner>
          <InputContainer>
            <Select id="candidates">
              {Object.entries(candidates).map(([id, { name }], value) => (
                <Option key={id} value={id}>
                  {name}
                </Option>
              ))}
            </Select>
            <span>
              <Button onClick={update}>Add</Button>
            </span>
          </InputContainer>
        </ModalContainer>
      </div>
    );
  } else {
    return <div></div>;
  }
};

// extract current job which has been selected and all the availabel candidates and the boolean
// value to toggel.abs

const mapStateToProps = createStructuredSelector({
  showModal: selectCandidateModal,
  currentJob: selectSelectedJob,
  candidates: selectCandidates,
});

const mapDispatchToProps = (dispatch) => ({
  toggel: (job) => dispatch(toggel(job)),
  addCandidate: (job_id, cand_id) =>
    dispatch(addCandidate({ job_id, cand_id })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCandidateModal);
