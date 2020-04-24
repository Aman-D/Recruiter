import React from "react";
import { ToolBarContainer, UpToolBar, DownToolBar } from "./toolbar.style";

const ToolBar = () => {
  return (
    <ToolBarContainer>
      <UpToolBar>
        <i class="fas fa fa-search"></i>
        <i class="fas fa fa-filter"></i>
        <i class="fas fa fa-sort"></i>
      </UpToolBar>
      <DownToolBar>
        <i class="fas fa fa-angle-left"></i>
      </DownToolBar>
    </ToolBarContainer>
  );
};

export default ToolBar;
