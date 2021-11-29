import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { leftPageVariants, pageTransition } from "../../../constants";
import Navbar from "../../Navbar";
import nameBackground from "../../../img/name-background.png";
import headshotImage from "../../../img/realHeadshot.png";
import { device } from "../../../device";

const AboutPage = ({
  setPreviousPage,
}: {
  setPreviousPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    setPreviousPage("about");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={leftPageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <HeaderImg src={nameBackground} alt="Sebastian-Radu Oarga" />
      <PageContent>
        <Headshot src={headshotImage} alt="headshot image" />
        <PersonalDescription>
          <p>
            Hi! I'm Sebastian, a Freiburg-based full-stack web developer with a
            passion for eye-catching design.
          </p>
          <p>
            I enjoy being creative and learning something new every day. In my
            work, I'm driven by passion, curiosity, and a desire to build
            greater things in better ways.
          </p>
          <FinalParagraph>
            Currently enrolled in the Integrify International Academy Full Stack
            Program.
          </FinalParagraph>
        </PersonalDescription>
      </PageContent>
    </Wrapper>
  );
};

//  I'm a full-stack web developer with a passion for eye-catching design.
//           Currently enrolled in the Full Stack Program @ Integrify International
//           Academy.

export default AboutPage;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background: transparent;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #56bba8;
    border-radius: 10px;
  }
`;

const HeaderImg = styled.img`
  width: 100%;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 4rem 5rem 4rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Headshot = styled.img`
  width: 70%;

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 30%;
  }
`;

const PersonalDescription = styled.div`
  width: 100%;
  font-size: 1.8rem;
  color: #4a345c;
  line-height: 2.5rem;
  font-weight: 300;
  margin-top: 2rem;
  text-indent: 5rem;
  text-align: justify;

  @media ${device.tablet} {
    font-size: 2.5rem;
    line-height: 4rem;
    width: 80%;
  }

  @media ${device.laptop} {
    width: 55%;
  }
`;

const FinalParagraph = styled.p`
  font-weight: 400;
  text-indent: 0;
  margin-top: 2rem;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
`;
