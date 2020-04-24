import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import { PanelConatainer } from "./panel.style";
//Componenets
import Dashboard from "../../component/Dashboard/dashboard.component";
import JobPanel from "../../component/JobPanel/jobpanel.component";
import CandidatePanel from "../../component/candidate-panel/candidate-panel.components";

// This Page serves as the main page, Different panels render based of the url in this section
const Panel = () => {
  return (
    <PanelConatainer>
      <Switch>
        <Route path="/jobs/:category" component={JobPanel} />
        <Route path="/candidates" component={CandidatePanel} />
        <Route excat path="/" component={Dashboard} />
      </Switch>
    </PanelConatainer>
  );
};

export default Panel;
