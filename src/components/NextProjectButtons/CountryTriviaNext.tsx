import styled from "styled-components";
import nextProject from "../../img/ct-next-project.png";
import { Link } from "react-router-dom";

const CountryTriviaNext = () => {
  return (
    <Link to="/country-trivia">
      <Image src={nextProject} alt="" />
    </Link>
  );
};

export default CountryTriviaNext;

const Image = styled.img`
  width: 100%;
  margin-top: 10rem;
`;
