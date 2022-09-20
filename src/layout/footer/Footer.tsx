import styled from "styled-components";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Rights>2022 Ecom Store All rights reserverd</Rights>
      <Links>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </Links>
    </Container>
  );
};
const Container = styled.div`
  color: #324d67;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.7rem;
`;
const Rights = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`;
const Links = styled.div`
  display: flex;
  column-gap: 0.5rem;

  svg {
    font-size: 2.3rem;
  }
`;

export default Footer;
