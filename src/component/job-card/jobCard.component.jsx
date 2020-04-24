import React from "react";
import { CardConatiner, CardSection, Skill } from "./jobCard.style";
import CustomButtonBar from "../custom-button-bar/custom-button-bar.componenets";

const JobCard = ({ job, category }) => {
  const {
    title,
    company,
    location,
    skill,
    salary,
    experience,
    type,
    no_candidates,
  } = job;

  return (
    <CardConatiner>
      <CardSection column>
        <h3>{title}</h3>
        <h5>
          {company},{location}
        </h5>
      </CardSection>
      <CardSection>
        <h4>
          <i className="far fa fa-calendar"></i>
          {type}
        </h4>
        <h4>
          <i className="fas fa fa-briefcase"></i>
          {experience}
        </h4>
      </CardSection>
      <CardSection flexStart>
        {skill.map((skill) => (
          <Skill>{skill}</Skill>
        ))}
      </CardSection>
      <CardSection>
        <h4>Candidates: {no_candidates}</h4>
        <h4>
          <i className="fas fa fa-money"></i>
          {salary}
        </h4>
      </CardSection>
      <CardSection>
        <CustomButtonBar category={category} job={job} />
      </CardSection>
    </CardConatiner>
  );
};

export default JobCard;
