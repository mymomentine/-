import React from 'react';
import { Nav, NavLink, NavMenu, NavBtnLink } from './NavbarElements';
import styled from 'styled-components';

const CVLink = styled.a`
  color: #e85d4e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem; /* Same padding as NavLink */
  height: 30px; /* Same height as NavLink */
  cursor: pointer;
  font-size: 1rem; /* Same font size as NavLink */
  background-color: #F3F3F3; /* Same bubble background color as NavLink */
  border-radius: 8px; /* Same slightly rounded corners as NavLink */
  margin: 0 5px; /* Same space between tabs as NavLink */
  box-sizing: border-box; /* Same box sizing as NavLink */

  &:hover {
    color: #787878;
  }

  &.active {
    color: #e85d4e;
  }

  @media screen and (max-width: 320px) {
    padding: 0 0.5rem; /* Same padding adjustment for smaller screens as NavLink */
    font-size: 0.9rem; /* Same font size adjustment for smaller screens as NavLink */
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/#" activeStyle>
            me
          </NavLink>
          <NavLink to="/publications" activeStyle>
            publications
          </NavLink>
          <NavLink to="/projects" activeStyle>
            projects
          </NavLink>
          <NavLink to="/blog" activeStyle>
            blog
          </NavLink>
          <NavLink href="../cv.pdf" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginLeft: 'auto' }}>
            cv
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
