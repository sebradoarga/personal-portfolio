import styled from "styled-components";
import { device } from "../../../device";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Homepage = () => {
  return (
    <Wrapper>
      <Container>
        <HorizontalAxis>
          <Btn>
            <ArrowBackIcon sx={{ fontSize: 40 }} />
            About
          </Btn>
          <Header>Sebastian-Radu Oarga</Header>
          <Btn>
            Contact <ArrowForwardIcon sx={{ fontSize: 40 }} />
          </Btn>
        </HorizontalAxis>
        <Btn id="portfolio-btn">
          Portfolio <ArrowDownwardIcon sx={{ fontSize: 40 }} />
        </Btn>
      </Container>
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
    135.8deg,
    rgba(26, 26, 29, 1) 27.1%,
    rgba(111, 34, 50, 1) 77.5%
  );
  background-size: 1000% 1000%;
  animation: animate 7.5s ease-in-out infinite;
`;

const Container = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  position: relative;
`;

const HorizontalAxis = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Header = styled.h1`
  color: #fff;
  font-size: 5rem;
  text-align: center;
  display: none;
`;

const Btn = styled.button`
  background: none;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: bold;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 2rem;
  display: flex;
  align-items: center;

  & * {
    margin: 0.5rem;
  }

  &:hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 1.2s infinite;
  }
`;
