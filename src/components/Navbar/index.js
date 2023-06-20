import React from 'react';
import { Nav, NavLink, NavMenu, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/#" activeStyle>
            about
          </NavLink>
          <NavLink to="/publications" activeStyle>
            publications
          </NavLink>
          <NavLink to="/misc" activeStyle>
            misc
          </NavLink>
          <NavLink to="../cv.pdf" target="_self" rel="noopener noreferrer" activeStyle>
            cv
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
