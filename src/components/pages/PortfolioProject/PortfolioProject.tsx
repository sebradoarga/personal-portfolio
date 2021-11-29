import styled from "styled-components";
import Navbar from "../../Navbar";
import pageHeaderImg from "../../../img/portfolio-project-header.png";
import LinkIcon from "@mui/icons-material/Link";
import BuildIcon from "@mui/icons-material/Build";
import BrushIcon from "@mui/icons-material/Brush";
import GitHubIcon from "@mui/icons-material/GitHub";
import { device } from "../../../device";
import previousProject from "../../../img/ct-previous-project.png";
import backToPortfolio from "../../../img/back-to-portfolio-btn.png";
import { Link } from "react-router-dom";

const CountryTrivia = () => {
  return (
    <Wrapper>
      <Navbar />
      <PageHeader src={pageHeaderImg} alt="My portfolio" />
      <ProjectInfo>
        <LeftSide>
          <Overview>
            I built this website to introduce myself and some of my work.
            Keeping this in mind, I tried to use design as a language and give
            the visitor a feeling of what I'm like as a person and as a
            developer even before they can navigate to the About page or the
            individual project pages. Therefore, I allowed myself to be creative
            and playful in styling the webpage, using cheerful color
            combinations and subtle animations, to prove, in addition to my
            full-stack developer skills, my attention to detail and eye for
            design and pleasing aesthetics.
          </Overview>
          <Features>
            <FeaturesHeader>Features</FeaturesHeader>
            <FeatureList>
              <Feature>animated, color-changing background</Feature>
              <Feature>carousel structure (sliding pages)</Feature>
              <Feature>individual project presentation pages</Feature>
              <Feature>fully responsive</Feature>
            </FeatureList>
          </Features>
          <ReadMore>
            Read more about it on my
            <InlineGithubLink
              href="https://github.com/sebradoarga/country-trivia"
              target="_blank"
            >
              Github
            </InlineGithubLink>
            .
          </ReadMore>
        </LeftSide>
        <RightSide>
          <Access>
            <SubsectionHeader>
              <LinkIcon fontSize="large" /> Under the hood
            </SubsectionHeader>
            <GithubLink
              href="https://github.com/sebradoarga/personal-portfolio"
              target="_blank"
            >
              <GitHubIcon fontSize="large" /> see the code
            </GithubLink>
          </Access>
          <Build>
            <SubsectionHeader>
              <BuildIcon fontSize="large" /> Built with
            </SubsectionHeader>
            <List>
              <Item>React</Item>
              <Item>Typescript</Item>
            </List>
          </Build>
          <Design>
            <SubsectionHeader>
              <BrushIcon fontSize="large" />
              Styled with
            </SubsectionHeader>
            <List>
              <Item>CSS</Item>
              <Item>Styled Components</Item>
            </List>
          </Design>
        </RightSide>
      </ProjectInfo>
      <NavigationButtons>
        <NavigationButtonLink to="/country-trivia">
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
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #43778d;
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
    margin-bottom: 0;
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
  color: #43778d;
  transition: all 0.3s ease;

  &:hover {
    color: #ec4e73;
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
  border: 3px solid #43778d;
  padding: 1.5rem;
  border-radius: 5px;
`;

const Build = styled.div`
  margin-top: 2rem;
  border: 3px solid #43778d;
  padding: 1.5rem;
  border-radius: 5px;
`;

const Design = styled.div`
  margin-top: 2rem;
  border: 3px solid #43778d;
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
  border-bottom: 2px dashed #43778d;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  & * {
    margin: 0 1rem;
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
    color: #ec4e73;
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
