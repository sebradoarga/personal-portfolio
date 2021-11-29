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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          temporibus quasi mollitia neque magni aspernatur voluptatibus et
          deleniti voluptatem ipsa eius libero obcaecati culpa dolorum, aperiam
          ab soluta tempore minima dolor, ut necessitatibus nostrum. Repellat,
          laborum recusandae assumenda atque reprehenderit totam necessitatibus
          illo voluptate illum, voluptatibus ullam voluptatum quibusdam dolore!
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

const PersonalDescription = styled.p`
  width: 100%;
  font-size: 1.8rem;
  color: black;
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
