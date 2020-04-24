import Jobs from "./jobs";
import candidate from "./candidate";

import panelActionTypes from "./panel.actionTypes";
import {
  addJob,
  deleteJob,
  updateCandidate,
  updateCandidateCount,
} from "./panel.utli";

const INITIAL_STATE = {
  jobs: Jobs,
  candidate: candidate,
  showModal: false,
  selectedJob: {},
};

const panelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case panelActionTypes.GET_JOBS:
      return {
        ...state,
        jobs: Jobs[`${action.payload}`],
      };
    case panelActionTypes.ADD_JOB:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          accepted: addJob(state.jobs, action.payload),
        },
      };
    case panelActionTypes.DELETE_JOB:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          rejected: deleteJob(state.jobs, action.payload),
        },
      };
    case panelActionTypes.TOGGEL_MODAL: {
      return {
        ...state,
        showModal: !state.showModal,
        selectedJob: action.payload,
      };
    }
    case panelActionTypes.ADD_CANDIDATE:
      const { job_id, cand_id } = action.payload;

      return {
        ...state,
        jobs: {
          ...state.jobs,
          accepted: updateCandidateCount(state.jobs, job_id),
        },
        candidate: {
          ...updateCandidate(state.candidate, cand_id),
        },
      };
    default: {
      return state;
    }
  }
};

export default panelReducer;
