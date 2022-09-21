import styled from "styled-components";
import headphone from "../../../assets/images/darkHeadphone.webp";

const SecondBanner = () => {
  return (
    <Container>
      <Left>
        <p className="small">29% OFF</p>
        <p id="desktop" className="big">
          Fine
          <br />
          Smile
        </p>
        <p id="mobile" className="big">
          Fine Smile
        </p>
        <p className="small">29 Apr to 29 may</p>
      </Left>
      <Middle>
        <img src={headphone} alt="dark heaphone" />
      </Middle>
      <Right>
        <p className="small">Beats Solo Air</p>
        <p className="big">Summer Sale</p>
        <p className="small">
          company that's grown from 270 to 480 employees in the last 12 months.
        </p>
        <button id="shop">Shop Now</button>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  padding: 6rem 2rem;
  margin: 8rem 0 3rem;
  border-radius: 10px;
  background-color: #f02d34;
  display: flex;

  @media (max-width: 1380px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 460px) {
    row-gap: 1rem;
  }
`;

const Left = styled.div`
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;

    #mobile {
      display: block !important;
    }

    #desktop {
      display: none;
    }
  }

  #mobile {
    display: none;
  }

  .small {
    font-size: 1.2rem;
    color: white;
  }

  .big {
    font-size: 5rem;
    font-weight: bold;
    color: white;

    @media (max-width: 940px) {
      font-size: 3rem;
    }

    @media (max-width: 460px) {
      font-size: 2rem;
    }
  }
`;
const Middle = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    position: absolute;
    bottom: -80px;

    @media (max-width: 1380px) {
      bottom: 0px;
    }

    @media (max-width: 768px) {
      position: static;
      width: 50% !important;
    }

    @media (max-width: 460px) {
      width: 70% !important;
    }
  }
`;
const Right = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }

  .small {
    font-size: 1.2rem;
    color: white;
  }

  .big {
    font-size: 5rem;
    font-weight: bold;
    color: white;

    @media (max-width: 940px) {
      font-size: 3rem;
    }

    @media (max-width: 460px) {
      font-size: 2rem;
    }
  }

  button {
    background-color: white;
    padding: 0.3rem 0.5rem;
    border: none;
    margin-top: 1rem;
    color: #f02d34;
    font-weight: bold;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export default SecondBanner;
