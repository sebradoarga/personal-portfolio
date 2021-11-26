import styled from "styled-components";
import { device } from "../../../device";
import { motion } from "framer-motion";
import {
  rightPageVariants,
  leftPageVariants,
  upPageVariants,
  pageTransition,
} from "../../../constants";
import { Link } from "react-router-dom";
import HomeNavbar from "../../HomeNavbar";
import headshot from "../../../img/headshot.png";

const Homepage = ({ previousPage }: { previousPage: string }) => {
  return (
    <Wrapper
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={
        previousPage === "about"
          ? rightPageVariants
          : previousPage === "contact"
          ? leftPageVariants
          : upPageVariants
      }
      transition={pageTransition}
    >
      <HomeNavbar />
      <PageContent>
        <Headshot src={headshot} alt="" />
        <Menu>
          <Link to="/about">
            <Btn>About</Btn>
          </Link>
          <Link to="/portfolio">
            <Btn>Portfolio</Btn>
          </Link>
          <Link to="/contact">
            <Btn>Contact</Btn>
          </Link>
        </Menu>
      </PageContent>
    </Wrapper>
  );
};

export default Homepage;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Headshot = styled.img`
  border-radius: 30%;
  max-width: 25rem;
  display: block;
  margin-top: 3rem;

  @media ${device.laptop} {
    max-width: 40rem;
    margin-top: 0;
  }
`;

const Menu = styled.ul`
  margin-left: 3rem;
`;

const Btn = styled.button`
  background: none;
  border: none;
  color: #2f1a42;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  line-height: 6rem;

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

  @media ${device.tablet} {
    font-size: 5rem;
  }

  @media ${device.laptop} {
    margin: 2rem;
  }
`;
