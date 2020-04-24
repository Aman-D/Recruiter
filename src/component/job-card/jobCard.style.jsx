import styled from "styled-components";

export const CardConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 282px;
  min-height: 352px;
  box-shadow: 0 0 11px 1px #dce8f2;
  padding: 13px;
  color: #266aa3;
  background-color: white;
  h3 {
    font-size: 1.9rem;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? `column` : `row`)};
  justify-content: ${(props) =>
    props.flexStart ? `flex-start` : `space-between`};
  align-items: center;
  padding: 15px 0;
  flex-wrap: wrap;
  border-bottom: 1px solid gray;
  h5 {
    font-weight: 200;
  }
  i {
    font-size: 19px;
    padding: 0 5px;
  }
  height: 100%;
`;

export const Skill = styled.span`
  box-sizing: content-box;

  background-color: #084c80;
  color: white;
  margin: 4px;
  padding: 6px;
  border-radius: 5px;
`;
