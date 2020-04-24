import React from "react";

import Header from "./component/header/header.component";
import Sidebar from "./component/sidebar/siderbar.component";
import Panel from "./pages/panel/panel.component";
import ToolBar from "./component/toolbar/toobar.component";

import { MainContainer } from "./App.style";

function App() {
  return (
    <MainContainer>
      <div id="header">
        <Header />
      </div>
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="panel">
        <Panel />
      </div>
      <div id="toobar">
        <ToolBar />
      </div>
    </MainContainer>
  );
}

export default App;
