import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "h h h h h h"
    "s p p p p t";
  grid-template-rows: 95px auto;
  grid-template-columns: 250px auto auto auto auto 50px;
  overflow: hidden;
  #header {
    grid-area: h;
    height: auto;
    z-index: 100;
    box-shadow: 0 0 11px 1px #000;
  }
  #sidebar {
    grid-area: s;
    height: 100%;
  }
  #panel {
    grid-area: p;
    overflow-y: scroll;
    background-color: #f5fcff;
    height: 100%;
    position: relative;
  }
  #toolbar {
    grid-area: t;
  }
`;
