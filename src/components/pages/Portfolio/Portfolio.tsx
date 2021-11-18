import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { portfolioPageVariants, pageTransition } from "../../../constants";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Wrapper
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={portfolioPageVariants}
      transition={pageTransition}
    >
      Hello
      <Link to="/">Go back</Link>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  background: pink;
`;
