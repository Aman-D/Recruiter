import styled from "styled-components";

export const ModalOuterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(10, 147, 244, 0.14);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  padding: 20px;
  background-color: #1086e0;
  color: white;
  z-index: 100;
  box-shadow: 0 0 11px 0 rgba(73, 136, 181, 0.54);
`;

export const ModalHeadConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  i {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  margin: 10px 0;
  justify-content: center;
`;

export const Select = styled.select`
  width: 70%;
  padding: 10px;
  outline: none;
  background: #1086e0;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 15px;
`;

export const Option = styled.option`
  padding: 10px;
  outline: none;
  background: white;
  border: none;
  border-bottom: 1px solid white;
  color: #1086e0;
`;

export const Button = styled.button`
  padding: 10px 30px;
  border: none;
  outline: none;
  background-color: white;
  color: #1086e0;
  font-size: 16px;
  width: 100%;
`;
