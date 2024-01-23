import React from 'react';
import { Nav, NavLink, NavMenu, NavBtnLink } from './NavbarElements';
import styled from 'styled-components';

const CVLink = styled.a`
  color: #b4be89;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: #787878;
  }

  &.active {
    color: #b4be89;
  }

  @media screen and (max-width: 320px) {
    padding: 0 0.5rem;
    font-size: 0.9rem;
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
          <NavLink to="/blog" activeStyle>
            blog
          </NavLink>
          <NavLink to="/random" activeStyle>
            random
          </NavLink>
          <CVLink href="../cv.pdf" target="_self" rel="noopener noreferrer" className="coral-link" style={{ marginLeft: 'auto' }}>
            cv
          </CVLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
