import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../device";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const display = {
    display: "block",
  };

  return (
    <>
      <Nav>
        <Link to="/">
          <Header>Sebastian-Radu Oarga</Header>
        </Link>
        <MaterialIconContainer>
          <MenuIcon
            sx={{ fontSize: 40, color: "#2f1a42" }}
            onClick={clickHandler}
          />
        </MaterialIconContainer>
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
      <MobileNav style={isMenuOpen ? display : {}}>
        <Link to="/about">
          <MobileMenuItem>About</MobileMenuItem>
        </Link>
        <Link to="/portfolio">
          <MobileMenuItem>Portfolio</MobileMenuItem>
        </Link>
        <Link to="/contact">
          <MobileMenuItem>Contact</MobileMenuItem>
        </Link>
      </MobileNav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  height: 13vh;
  padding-bottom: 0;

  @media ${device.tablet} {
    padding-bottom: 3rem;
  }
`;

const MobileNav = styled.ul`
  position: absolute;
  padding-left: 3rem;
  display: none;
`;

const MobileMenuItem = styled.li`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: #2f1a42;
  margin-top: 1rem;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: #2f1a42;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const MaterialIconContainer = styled.div`
  display: block;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

const Links = styled.ul`
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

const Item = styled.li`
  margin: 0 2rem;
  font-size: 2rem;
  letter-spacing: 0.2rem;
  color: #2f1a42;
`;
