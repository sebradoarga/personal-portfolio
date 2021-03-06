import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Header>Sebastian-Radu Oarga</Header>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  color: #2f1a42;
`;
