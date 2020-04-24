import React from "react";
import { HeaderContainer, LeftHeader, RightHeader, User } from "./header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeader>
        <i class="fas fa fa-bars"></i>
        <span>LineupX</span>
      </LeftHeader>
      <RightHeader>
        <i class="fas fa fa-envelope"></i>
        <i class="fas fa fa-users"></i>
        <User>
          <i class="fas fa fa-user-circle"></i>
          <span>Username</span>
        </User>
      </RightHeader>
    </HeaderContainer>
  );
};

export default Header;
