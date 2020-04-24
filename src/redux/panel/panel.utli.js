//Utility functions

export const addJob = (jobs, id) => {
  jobs.accepted[id] = { ...jobs.live[id] };
  delete jobs.live[id];
  return jobs.accepted;
};

export const deleteJob = (jobs, id) => {
  jobs.rejected[id] = { ...jobs.live[id] };
  delete jobs.live[id];
  return jobs.rejected;
};

export const updateCandidateCount = (jobs, id) => {
  if (jobs.accepted[id].no_candidates > 0) jobs.accepted[id].no_candidates -= 1;
  return jobs.accepted;
};

export const updateCandidate = (candidate, id) => {
  delete candidate[id];
  return candidate;
};
