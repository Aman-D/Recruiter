import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
  width: initial;
  background-color: #1086e0;
  color: white;
  h3 {
    margin: 10px 0;
  }

  .tab {
    display: flex;
    width: 100%;
    padding: 6px 0;
    justify-content: space-between;
    .count {
      display: grid;
      place-items: center;
      color: #1086e0;
      background-color: white;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      position: relative;
    }
    &:hover .count {
      background-color: #1086e0;
      color: white;
    }
  }
`;

export const NavigationLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid white;
  padding: 10px;
  a {
    text-decoration: none;
    color: white;
    &:hover {
      background-color: white;
      color: #1086e0;
    }
  }

  .
`;
