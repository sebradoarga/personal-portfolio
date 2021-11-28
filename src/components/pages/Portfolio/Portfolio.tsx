import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { downPageVariants, pageTransition } from "../../../constants";
import Navbar from "../../Navbar";
import CountryTriviaPreview from "../../../img/country-trivia-preview.png";
import BookStorePreview from "../../../img/bookstore-preview.png";
import { Link } from "react-router-dom";
import { device } from "../../../device";

const Portfolio = ({
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

export default Portfolio;

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  // background: #f7f5f5;
  background: #ece9e6;
  background: linear-gradient(180deg, #ffffff, #e1e7ea);
`;

const PageContent = styled.div`
  overflow-y: auto;
  padding-bottom: 5rem;
  height: 87vh;
    ::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #422142;
  border-radius: 10px;

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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  @media ${device.laptop} {
    opacity: 0.9;

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
