import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { rightPageVariants, pageTransition } from "../../../constants";
import Navbar from "../../Navbar";
import image from "../../../img/social-media-img.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
      <PageContent>
        <LeftSide>
          <SocialMedia>
            <Hyperlink href="https://github.com/sebradoarga" target="_blank">
              <GitHubIcon sx={{ fontSize: 60, color: "#2F1A42" }} />
            </Hyperlink>
            <Hyperlink
              href="https://www.linkedin.com/in/sebastianoarga/"
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: 60, color: "#2F1A42" }} />
            </Hyperlink>
          </SocialMedia>
          <Email>
            Email: <Span>sebastianraduoarga@gmail.com</Span>
          </Email>
        </LeftSide>
        <Image src={image} alt="" />
      </PageContent>
    </Wrapper>
  );
};

export default AboutPage;

const Wrapper = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  background: transparent;
  position: relative;
`;

const PageContent = styled.div`
  display: flex;
  width: 70%;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
`;

const Hyperlink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5rem solid #62c68d;
  border-radius: 5px;
  width: 10rem;
  height: 10rem;
  margin: 0 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Email = styled.h2`
  margin-top: 5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  font-size: 2rem;
  color: #2f1a42;
  border-bottom: 0.3rem dashed #62c68d;
  padding-bottom: 0.5rem;
`;

const Span = styled.span`
  font-weight: 400;
`;

const Image = styled.img`
  width: 50%;
`;
