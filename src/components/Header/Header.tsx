import React from 'react';
import HomePageLink from '../HomePageLink';
import Reset from '../Reset';
import { HeaderContainer, HeaderOptions, HeaderText } from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Finding Falcone!</HeaderText>
      <HeaderOptions>
        <Reset />
        <HomePageLink />
      </HeaderOptions>
    </HeaderContainer>
  );
};

export default Header;
