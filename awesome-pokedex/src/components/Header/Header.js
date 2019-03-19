import React from 'react';
import PropType from 'prop-types';
import { Nav, Form, FormControl } from 'react-bootstrap';
import { NavHeader } from './HeaderStyle';
import { ButtonSearch } from '../Buttons/Button';
import { colors } from '../../styles/styles';

const Header = ({
    titleBrand, labelButton, value, onChange, onClick
}) => (
  <NavHeader 
    backgroundcolor={colors.secondaryDarken} 
    expand="lg"
    color={colors.white}
  >
    <NavHeader.Brand href="#home">{titleBrand}</NavHeader.Brand>
    <NavHeader.Toggle aria-controls="basic-NavHeader -nav" />
    <NavHeader.Collapse id="basic-NavHeader -nav">
      <Nav >
        <Nav.Item>
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={value} onChange={onChange}/>
            <ButtonSearch
              // variant="outline-success"
              backgroundcolor="transparent"
              color="white"
              onClick={onClick}
              >
              {labelButton}
            </ButtonSearch>
          </Form>
        </Nav.Item>
      </Nav>
    </NavHeader.Collapse>
  </NavHeader>
);

Header.propTypes = {
  titleBrand: PropType.string,
  labelButton: PropType.string,
  value: PropType.string,
  onChange: PropType.func,
  onClick: PropType.func,
};

export default Header;
