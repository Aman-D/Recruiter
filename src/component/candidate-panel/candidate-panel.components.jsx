import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCandidates } from "../../redux/panel/panel.selector";

import {
  CandidateCardContainer,
  CandidateContainer,
} from "./candidate-panel.style";

const CandidatePanel = ({ candidates }) => {
  return (
    <CandidateContainer>
      {Object.entries(candidates).map(
        ([id, { name, experience, location, des, skill }], value) => {
          return (
            <CandidateCardContainer>
              <h3 className="name">{name}</h3>
              <h4 className="loc">{location}</h4>
              <p className="desc">{des}</p>
              <h4 className="exp">Experience: {experience}</h4>
              <h4 className="skill">
                Skill :{" "}
                {skill.map((skill) => {
                  return skill + ",  ";
                })}
              </h4>
            </CandidateCardContainer>
          );
        }
      )}
    </CandidateContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  candidates: selectCandidates,
});

export default connect(mapStateToProps)(CandidatePanel);
