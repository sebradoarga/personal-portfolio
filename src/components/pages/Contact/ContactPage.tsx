import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { rightPageVariants, pageTransition } from "../../../constants";
import Navbar from "../../Navbar";

const AboutPage = ({
  setPreviousPage,
}: {
  setPreviousPage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    setPreviousPage("contact");
  }, []);

  return (
    <Wrapper
      style={{ position: "absolute" }}
      initial="initial"
      animate="in"
      exit="out"
      variants={rightPageVariants}
      transition={pageTransition}
    >
      <Navbar />
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  background: transparent;
`;
