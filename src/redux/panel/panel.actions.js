import panelActionTypes from "./panel.actionTypes";

// to set the job value to live,accept or rejected
export const setJob = (category) => ({
  type: panelActionTypes.GET_JOBS,
  payload: category,
});

// to add jobs in accepted jobs list
export const addJob = (id) => ({
  type: panelActionTypes.ADD_JOB,
  payload: id,
});

// to add jobs in rejected jobs list
export const deleteJob = (id) => ({
  type: panelActionTypes.DELETE_JOB,
  payload: id,
});

// toggels the Modal used for selecting the candidate
export const toggel = (job) => ({
  type: panelActionTypes.TOGGEL_MODAL,
  payload: job,
});

// reduces the candidate count from the job with given id and removes the candidate with given id
export const addCandidate = (jobAndCandidate) => {
  return {
    type: panelActionTypes.ADD_CANDIDATE,
    payload: jobAndCandidate,
  };
};
