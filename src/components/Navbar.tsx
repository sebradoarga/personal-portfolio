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

  const block = {
    display: "block",
  };

  const flex = {
    display: "flex",
  };

  const hide = {
    display: "none",
  };

  return (
    <>
      <Nav>
        <StyledLink to="/" style={isMenuOpen ? hide : block}>
          <Header>Sebastian-Radu Oarga</Header>
        </StyledLink>
        <MobileNav style={isMenuOpen ? flex : hide}>
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
`;

const StyledLink = styled(Link)`
  @media ${device.tablet} {
    display: block !important;
  }
`;

const MobileNav = styled.ul`
  width: 30rem;
`;

const MobileMenuItem = styled.li`
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  color: #2f1a42;
  margin: 0 0.5rem;
  text-align: right;

  @media ${device.mobileL} {
    margin: 0 1rem;
  }

  @media ${device.tablet} {
    display: none !important;
  }
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
