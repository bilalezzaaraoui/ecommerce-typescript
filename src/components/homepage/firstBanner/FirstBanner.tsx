import styled from "styled-components";
import headphone from "../../../assets/images/headphone.webp";

const FirstBanner = () => {
  return (
    <Container>
      <div className="mobile">
        <LittleTitle>Beats Solo</LittleTitle>
        <BigTitle>Wireless</BigTitle>
        <BoldTitle>Headphones</BoldTitle>
        <Btn>Shop Wireless Headphone</Btn>
      </div>
      <Img src={headphone} alt="logo" />
    </Container>
  );
};

const Container = styled.div`
  background-color: #dcdcdc;
  margin: 5rem 0 2rem;
  padding: 5rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 780px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 0 2rem 3rem;

    .mobile {
      align-self: flex-start;
      margin-top: -3rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1rem 3rem;
  }
`;

const LittleTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: -0.5rem;
`;
const BigTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: -1.5rem;

  @media (max-width: 980px) {
    margin-bottom: -1rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: -0.5rem;
  }
`;
const BoldTitle = styled.h3`
  font-size: 9rem;
  color: white;
  text-transform: uppercase;

  @media (max-width: 1400px) {
    font-size: 7rem;
  }

  @media (max-width: 1180px) {
    font-size: 6rem;
  }

  @media (max-width: 1080px) {
    font-size: 5rem;
  }

  @media (max-width: 980px) {
    font-size: 4rem;
  }

  @media (max-width: 850px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;
const Btn = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  border: none;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Img = styled.img`
  position: absolute;
  width: 400px;
  right: -50px;
  top: -50px;

  transition: 0.3s;

  &:hover {
    transform: translateY(20px);
  }

  @media (max-width: 780px) {
    position: relative;
    right: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default FirstBanner;
