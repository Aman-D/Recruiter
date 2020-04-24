import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: #1086e0;
  // box-shadow: 0 2px 11px 1px #262626;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  color: white;
  i {
    padding: 0 20px;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-left: 2px solid white;
`;
