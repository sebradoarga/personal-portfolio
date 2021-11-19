import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { downPageVariants, pageTransition } from "../../../constants";
import Navbar from "../../Navbar";
import CountryTriviaPreview from "../../../img/country-trivia-preview.png";

const AboutPage = ({
  setPreviousPage,
}: {
  setPreviousPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    setPreviousPage("portfolio");
  }, []);
  return (
    <Wrapper
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={downPageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <PageContent>
        <CountryTrivia>
          <Preview src={CountryTriviaPreview} alt="" />
        </CountryTrivia>
      </PageContent>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  background: transparent;
`;

const PageContent = styled.div``;

const CountryTrivia = styled.div`
  margin-top: 5%;
  margin-left: 25%;
`;

const Preview = styled.img`
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: float 6s ease infinite;

  &:hover {
    transform: scale(1.05);
  }
`;
