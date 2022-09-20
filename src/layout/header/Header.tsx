import styled from "styled-components";
import { TbBrandGithub } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <Logo>Ecom Store</Logo>
      <Info>
        <Github>
          <a
            href="https://github.com/bilalezzaaraoui/"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandGithub /> <span>bilalezzaaraoui</span>
          </a>
        </Github>
        <Cart>
          <FiShoppingCart />
          <div>
            <span>0</span>
          </div>
        </Cart>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: #f02d34;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;
const Github = styled.div`
  a {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    svg {
      font-size: 1.5rem;
      color: #324d67;
    }

    span {
      font-weight: bold;
      color: #324d67;
    }

    @media (max-width: 480px) {
      span {
        display: none;
      }
    }
  }
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  position: relative;

  svg {
    font-size: 1.5rem;
    color: #324d67;
  }

  div {
    position: absolute;
    top: -10px;
    right: -15px;
    background-color: red;
    padding: 2px 6px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 0.9rem;
      color: white;
    }
  }
`;

export default Header;
