import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Get a quick peek to the different links in the website</h1>
      <ul>
        <li>
          <strong>Candidate Tab</strong> shows all the available candidates that
          are available to be hired.
        </li>
        <li>
          <strong>Live tab</strong> shows all the live jobs that are available
          in a company
        </li>
        <li>
          <strong>Accept tab</strong> shows all the jobs that have been accepted
          by the recruiter.
        </li>
        <li>
          <strong>Reject tab</strong> shows all the jobs that have been rejected
          by the recruiter.
        </li>
      </ul>
      <h1>Workflow</h1>
      <ul>
        <li>Recruiter can accept or reject a live job</li>
        <li>Accepted/ Rejected jobs move to their respective sections</li>
        <li>
          In accepted job section, the recruiter can add a candidate to specific
          jobs. This will lead to the candidate being removed from the current
          candidate list and also the candidate count for the specific job will
          also decrease.{" "}
        </li>
      </ul>
      <h1>Data</h1>
      <ul>
        <li>
          The data comes from two files <em>candidate.js</em> and{" "}
          <em>jobs.js</em>. These are hardcoded data.
        </li>
      </ul>
      <h1 id="stackused">StackUsed</h1>
      <blockquote>
        <p>React, Redux, styled-components</p>
      </blockquote>
    </div>
  );
};

export default Dashboard;
