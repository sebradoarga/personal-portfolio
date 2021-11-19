import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Header>Sebastian-Radu Oarga</Header>
      <Links>
        <Item>Portfolio</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </Links>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: #2f1a42;
`;

const Links = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin: 0 2rem;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  color: #2f1a42;
`;
