import React from 'react';
import PropType from 'prop-types';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LandingPage, HeaderContainer } from './HeaderStyle';

const Header = ({
    titleBrand, labelButton, value, onChange, onClick
}) => (
  <HeaderContainer className="d-flex justify-content-center align-items-center">
  <Link to="/">
    <h1>AwesomePokedex</h1>
    <LandingPage className="d-flex align-items-center flex-column">
      <Image src={require('../../img/pokedex-icon-19.jpg')} fluid />
    </LandingPage>
  </Link>
  </HeaderContainer>
);

Header.propTypes = {
  titleBrand: PropType.string,
  labelButton: PropType.string,
  value: PropType.string,
  onChange: PropType.func,
  onClick: PropType.func,
};

export default Header;
