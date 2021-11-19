import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { leftPageVariants, pageTransition } from "../../../constants";
import Navbar from "../../Navbar";
import nameBackground from "../../../img/name-background.png";

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
      <PageContent className="name-background">
        <Text>
          I'm a full-stack web developer with a passion for eye-catching design.
          Currently enrolled in the Full Stack Program @ Integrify International
          Academy.
        </Text>
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

const PageContent = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: #2f1a42;
  font-size: 5rem;
  text-align: center;
  width: 80%;
  line-height: 8rem;
`;
