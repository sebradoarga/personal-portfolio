import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Header>Sebastian-Radu Oarga</Header>
      </Link>
      <Links>
        <Link to="/about">
          <Item>About</Item>
        </Link>
        <Link to="/portfolio">
          <Item>Portfolio</Item>
        </Link>
        <Link to="/contact">
          <Item>Contact</Item>
        </Link>
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
