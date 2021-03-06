import styled from "styled-components";
import Navbar from "../../Navbar";
import pageHeaderImg from "../../../img/audiophile-header.png";
import LinkIcon from "@mui/icons-material/Link";
import BuildIcon from "@mui/icons-material/Build";
import BrushIcon from "@mui/icons-material/Brush";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import display1 from "../../../img/audiophile-display1.png";
import display2 from "../../../img/audiophile-display2.png";
import display3 from "../../../img/audiophile-display4.png";
import { device } from "../../../device";
import previousProject from "../../../img/portfolio-previous-project.png";
import backToPortfolio from "../../../img/back-to-portfolio-btn.png";

import { Link } from "react-router-dom";

const CountryTrivia = () => {
  return (
    <Wrapper>
      <Navbar />
      <PageHeader src={pageHeaderImg} alt="Country Trivia" />
      <ProjectInfo>
        <LeftSide>
          <Overview>
            This is a project I built to familarize myself with Vue.js. The
            requirement was to build the front-end for an online store, while
            making it look and behave as close as possible to the design files
            provided by
            <InlineGithubLink
              href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </InlineGithubLink>
            . There were no requirements as to the used technologies, so I used
            this project as an opportunity to learn about Vue.js. A JSON file
            containing the product information was also provided, so making the
            website as dynamic as possible was also a focus point for me.
          </Overview>
          <Features>
            <FeaturesHeader>Features</FeaturesHeader>
            <FeatureList>
              <Feature>Different layouts depending on screen size</Feature>
              <Feature>Dynamic pages and components</Feature>
              <Feature>Cart (adding/removing products)</Feature>
              <Feature>Checkout form with form validation</Feature>
              <Feature>Local storage</Feature>
            </FeatureList>
          </Features>
          <ReadMore>
            Read more about it on my
            <InlineGithubLink
              href="https://github.com/sebradoarga/audiophile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </InlineGithubLink>
            .
          </ReadMore>
        </LeftSide>
        <RightSide>
          <Access>
            <SubsectionHeader>
              <LinkIcon fontSize="large" /> Check it out
            </SubsectionHeader>
            <NetlifyLink
              href="https://audiophilewebsite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageIcon fontSize="large" /> link to website
            </NetlifyLink>
            <GithubLink
              href="https://github.com/sebradoarga/audiophile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" /> see the code
            </GithubLink>
          </Access>
          <Build>
            <SubsectionHeader>
              <BuildIcon fontSize="large" /> Built with
            </SubsectionHeader>
            <List>
              <Item>Vue.js</Item>
            </List>
          </Build>
          <Design>
            <SubsectionHeader>
              <BrushIcon fontSize="large" />
              Styled with
            </SubsectionHeader>
            <List>
              <Item>SCSS</Item>
            </List>
          </Design>
        </RightSide>
      </ProjectInfo>
      <Display src={display1} />
      <Display src={display2} />
      <Display src={display3} />
      <NavigationButtons>
        <NavigationButtonLink to="/portfolio-project">
          <NavigationButtonImage src={previousProject} alt="Previous project" />
        </NavigationButtonLink>
        <NavigationButtonLink to="/portfolio">
          <NavigationButtonImage
            src={backToPortfolio}
            alt="Back to portfolio"
          />
        </NavigationButtonLink>
      </NavigationButtons>
    </Wrapper>
  );
};

export default CountryTrivia;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  overflow-y: auto;

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
    background: black;
    border-radius: 10px;
  }
`;

const PageHeader = styled.img`
  width: 100%;
  object-fit: contain;
`;

const ProjectInfo = styled.div`
  margin-top: 5rem;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 5rem auto 0 auto;
    padding: 0;
  }
`;

const LeftSide = styled.div`
  font-size: 2rem;
  width: 100%;
  font-weight: 300;
  line-height: 3rem;

  @media ${device.tablet} {
    width: 70%;
  }
`;

const Overview = styled.p`
  text-indent: 5rem;
  text-align: justify;
`;

const Features = styled.div`
  @media ${device.tablet} {
    margin-left: 5rem;
  }
`;

const FeaturesHeader = styled.h2`
  margin-top: 5rem;
  font-weight: 400;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

const FeatureList = styled.ul`
  margin-top: 1rem;
  list-style: initial;
  width: 100%;

  @media ${device.tablet} {
    width: 80%;
  }
`;

const Feature = styled.li`
  margin-top: 0.5rem;
  margin-left: 1rem;
`;

const ReadMore = styled.p`
  margin-top: 2rem;

  @media ${device.tablet} {
    margin-left: 5rem;
  }
`;

const InlineGithubLink = styled.a`
  margin-left: 0.5rem;
  font-weight: 400;
  color: #479981;
  transition: all 0.3s ease;

  &:hover {
    color: #5ec6a4;
  }
`;

const RightSide = styled.div`
  margin-top: 3rem;
  margin-left: 0;

  @media ${device.tablet} {
    margin-left: 5rem;
    margin-top: 0;
  }
`;

const Access = styled.div`
  border: 3px solid #479981;
  padding: 1.5rem;
  border-radius: 5px;
`;

const Build = styled.div`
  margin-top: 2rem;
  border: 3px solid #479981;
  padding: 1.5rem;
  border-radius: 5px;
`;

const Design = styled.div`
  margin-top: 2rem;
  border: 3px solid #479981;
  padding: 1.5rem;
  border-radius: 5px;
`;

const SubsectionHeader = styled.h2`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border-bottom: 2px dashed #479981;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  & * {
    margin: 0 1rem;
  }
`;

const NetlifyLink = styled.a`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 400;

  & * {
    margin: 1rem;
  }

  &:hover {
    color: #2d505d;
  }
`;

const GithubLink = styled.a`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 400;

  & * {
    margin: 1rem;
  }

  &:hover {
    color: #2d505d;
  }
`;

const Display = styled.img`
  width: 100%;
  display: block;
  margin: 1rem auto 0 auto;
  border-radius: 5px;

  @media ${device.tablet} {
    width: 80%;
    margin: 5rem auto 0 auto;
  }
`;

const List = styled.ul``;

const Item = styled.li`
  margin-left: 4rem;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
  margin-top: 1rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 6rem 0 4rem 0;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    margin: 7rem auto 5rem auto;
    width: 70%;
  }
`;

const NavigationButtonLink = styled(Link)`
  display: block;
  width: 50%;
  margin: 0.7rem auto;

  @media ${device.tablet} {
    margin: 0 1rem;
    transition: transform 0.3s ease;
    width: 45%;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

const NavigationButtonImage = styled.img`
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
`;
