import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.8); /* Adjust the transparency as needed */
  height: 60px; /* Adjust the height as needed */
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  font-family: 'Nunito Sans', sans-serif;
  position: static;
  top: 0;
  left: 0;
  right: 0;
  // backdrop-filter: blur(4px); /* Adjust the blur strength as needed */
`;

export const NavLink = styled(Link)`
  color: #e85d4e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem; /* Adjust the padding as needed */
  height: 30px; /* Thinner height */
  cursor: pointer;
  font-size: 1rem; /* Adjust the font size as needed */
  background-color: #F3F3F3; /* Bubble background color */
  border-radius: 8px; /* Slightly rounded corners for the bubble */
  margin: 0 5px; /* Space between tabs */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */

  &:hover {
    color: #787878;
  }

  &.active {
    color: #e85d4e;
  }

  @media screen and (max-width: 320px) {
    padding: 0 0.5rem; /* Adjust the padding as needed for smaller screens */
    font-size: 0.9rem; /* Adjust the font size as needed for smaller screens */
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const PageContent = styled.div`
  margin-top: 60px; /* Adjust the margin as needed to create space below the navigation bar */
`;

const MyComponent = () => {
  return (
    <Container>
      <Nav>
        {/* Navigation bar content */}
      </Nav>
      <PageContent>
        {/* Page contents */}
      </PageContent>
    </Container>
  );
};

export default MyComponent;
