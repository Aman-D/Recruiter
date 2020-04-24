import styled from "styled-components";

export const CandidateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .loc {
    font-weight: 200;
    padding-bottom: 20px;
  }
  .desc {
    text-align: justify;
    padding-bottom: 20px;
  }
`;

export const CandidateCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  padding: 20px;
  background-color: white;
  margin: 15px;
  box-shadow: 0 0 11px 1px #dce8f2;
  color: #266aa3;
`;
