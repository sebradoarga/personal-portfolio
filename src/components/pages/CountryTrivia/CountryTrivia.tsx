import styled from "styled-components";
import Navbar from "../../Navbar";
import pageHeaderImg from "../../../img/country-trivia-header.png";
import LinkIcon from "@mui/icons-material/Link";
import BuildIcon from "@mui/icons-material/Build";
import BrushIcon from "@mui/icons-material/Brush";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import display1 from "../../../img/country-trivia-display1.png";
import display2 from "../../../img/country-trivia-display2.png";
import display3 from "../../../img/country-trivia-display3.png";
import { device } from "../../../device";

const CountryTrivia = () => {
  return (
    <Wrapper>
      <Navbar />
      <PageHeader src={pageHeaderImg} alt="" />
      <ProjectInfo>
        <LeftSide>
          <Overview>
            This is a project I developed while taking part in the Integrify
            International Academy Fullstack Program. I built this website around
            the REST Countries API, to display all the countries in the API as a
            sortable and searchable table. The user can also navigate to
            individual country pages where additional information about a
            specific country is displayed. This website is fully responsive and
            styled entirely from scratch with CSS and styled components.
          </Overview>
          <Features>
            <FeaturesHeader>Features</FeaturesHeader>
            <FeatureList>
              <Feature>Sortable and searchable table</Feature>
              <Feature>
                Light and Dark mode Countries can be favorited and save in
                Favorite Cart
              </Feature>
              <Feature>Individual pages for each speciifc countries</Feature>
              <Feature>
                Full responsiveness (including the table, which adjusts the
                amount of shown information based on window size)
              </Feature>
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
              <LinkIcon fontSize="large" /> Check it out
            </SubsectionHeader>
            <NetlifyLink
              href="https://countrytrivia.netlify.app/"
              target="_blank"
            >
              <LanguageIcon fontSize="large" /> link to website
            </NetlifyLink>
            <GithubLink
              href="https://github.com/sebradoarga/country-trivia"
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
              <Item>Redux</Item>
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
      <Display src={display1} alt="" />
      <Display src={display3} alt="" />
      <Display src={display2} alt="" />
    </Wrapper>
  );
};

export default CountryTrivia;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  overflow-y: auto;
  padding-bottom: 5rem;
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
  color: #ff5d7a;
  transition: all 0.3s ease;

  &:hover {
    color: #2d505d;
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
  border: 3px solid pink;
  padding: 1.5rem;
  border-radius: 5px;
`;

const Build = styled.div`
  margin-top: 2rem;
  border: 3px solid pink;
  padding: 1.5rem;
  border-radius: 5px;
`;

const Design = styled.div`
  margin-top: 2rem;
  border: 3px solid pink;
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
  border-bottom: 2px dashed pink;
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