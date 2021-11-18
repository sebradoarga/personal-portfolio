import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { leftPageVariants, pageTransition } from "../../../constants";
import { Link } from "react-router-dom";

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
      Hello
      <Link to="/">Go back</Link>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  background: transparent;
`;
