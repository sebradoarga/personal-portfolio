import styled from "styled-components";
import { device } from "../../../device";

const Homepage = () => {
  return (
    <Wrapper>
      <Container>
        <Header>Sebastian-Radu Oarga</Header>
        <Buttons>
          <Btn>About</Btn>
          <Btn>Portfolio</Btn>
          <Btn>Contact</Btn>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f4d03f;
  background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);

  background-size: 1000% 1000%;
  animation: animate 7.5s ease-in-out infinite;
`;

const Container = styled.div`
  background: none;
  padding: 5rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;
`;

const Header = styled.h1`
  color: #fff;
  font-size: 5rem;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 5rem;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Btn = styled.button`
  background: black;
  border: 0.2rem solid #ffffff73;
  border-radius: 5px;
  color: #ffffff73;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-family: "Poppins";
  font-size: 2rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem;

  &:hover {
    transform: scale(1.05);
    color: white;
    border-color: white;
  }
`;
