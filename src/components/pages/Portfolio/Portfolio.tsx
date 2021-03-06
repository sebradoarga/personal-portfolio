import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { downPageVariants, pageTransition } from "../../../constants";
import Navbar from "../../Navbar";
import CountryTriviaPreview from "../../../img/country-trivia-preview.png";
import BookStorePreview from "../../../img/bookstore-preview.png";
import PortfolioPreview from "../../../img/portfolio-preview.png";
import AudiophilePreview from "../../../img/audiophile-preview.png";
import ComingSoonPreview from "../../../img/comingSoon-preview.png";
import { Link } from "react-router-dom";
import { device } from "../../../device";

const Portfolio = ({
  setPreviousPage,
}: {
  setPreviousPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    setPreviousPage("portfolio");
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <PageContent className="portfolio-content">
        <LeftsideBubble>
          <Link to="/the-story-store" className="preview">
            <Preview
              src={BookStorePreview}
              alt="Logo for The Story Store"
              className="bs-preview"
            />
          </Link>
          <Description className="bs-project-description project-description"></Description>
        </LeftsideBubble>
        <RightsideBubble>
          <Link to="/country-trivia" className="preview">
            <Preview
              src={CountryTriviaPreview}
              alt="Logo for Country Trivia"
              className="ct-preview"
            />
          </Link>
          <Description className="ct-project-description project-description"></Description>
        </RightsideBubble>
        <LeftsideBubble>
          <Link to="/portfolio-project" className="preview">
            <Preview
              src={PortfolioPreview}
              alt="The same drawing of the young man from the homepage of this website"
              className="portfolio-preview"
            />
          </Link>
          <Description className="portfolio-project-description project-description"></Description>
        </LeftsideBubble>
        <RightsideBubble>
          <Link to="/audiophile" className="preview">
            <Preview
              src={AudiophilePreview}
              alt="audiophile"
              className="preview audiophile-preview"
            />
          </Link>
          <Description className="audiophile-description project-description"></Description>
        </RightsideBubble>
        <LeftsideBubble>
          <Link to="/contact" className="preview">
            <Preview
              src={ComingSoonPreview}
              alt="More coming soon"
              className="preview comingsoon-preview"
            />
          </Link>
          <Description className="comingsoon-description project-description"></Description>
        </LeftsideBubble>
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
    display: none;

    @media ${device.laptop} {
      display: block;
    }
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #422142;
    border-radius: 10px;
  }
`;

const LeftsideBubble = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
`;

const RightsideBubble = styled.div`
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
