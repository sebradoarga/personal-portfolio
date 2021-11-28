import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { downPageVariants, pageTransition } from "../../../constants";
import Navbar from "../../Navbar";
import CountryTriviaPreview from "../../../img/country-trivia-preview.png";
import BookStorePreview from "../../../img/bookstore-preview.png";
import { Link } from "react-router-dom";
import { device } from "../../../device";

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
        <BookStore>
          <Link to="/the-story-store" className="preview">
            <Preview src={BookStorePreview} alt="" className="bs-preview" />
          </Link>
          <Description className="bs-project-description project-description"></Description>
        </BookStore>
        <CountryTrivia>
          <Link to="/country-trivia" className="preview">
            <Preview src={CountryTriviaPreview} alt="" className="ct-preview" />
          </Link>
          <Description className="ct-project-description project-description"></Description>
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
  padding-bottom: 5rem;
  height: 87vh;
`;

const BookStore = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`;

const CountryTrivia = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
  flex-direction: row-reverse;
`;

const Preview = styled.img`
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media ${device.laptop} {
    opacity: 0.8;

    &:hover {
      border-radius: 25px;
      opacity: 1;
    }
  }
`;

const Description = styled.p`
  font-size: 2rem;
  max-width: 45rem;
  line-height: 3rem;
  letter-spacing: 0.2rem;
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;
