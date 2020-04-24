import styled from "styled-components";

export const ButtonBarConatiner = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  padding: 6px 20px;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.children === "Accept"
      ? `rgba(0, 229, 0, 0.81)`
      : props.children === "Reject"
      ? `rgba(218, 35, 11, 0.81)`
      : `#1086e0`};
  color: white;
  font-size: 16px;
  border-radius: 5px;
  ${(props) =>
    props.disabled
      ? ``
      : `
    cursor: pointer;  
    &:hover {
    background-color: #266aa3;
  }`}
`;
