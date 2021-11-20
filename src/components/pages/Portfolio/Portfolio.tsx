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
          <Preview src={CountryTriviaPreview} alt="" className="preview" />
          <CTDescription className="project-description"></CTDescription>
        </CountryTrivia>
      </PageContent>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  background: #f7f5f5;
`;

const PageContent = styled.div`
  overflow-y: auto;
  min-height: 100vh;
`;

const CountryTrivia = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`;

const Preview = styled.img`
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: float 15s ease infinite;

  &:hover {
    border-radius: 25px;
  }
`;

const CTDescription = styled.p`
  font-size: 2rem;
  max-width: 45rem;
  line-height: 3rem;
  letter-spacing: 0.2rem;
`;
