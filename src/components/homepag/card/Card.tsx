import styled from "styled-components";

type CardsProps = {
  image: string;
  title: string;
  price: string;
};

const Card = (props: CardsProps) => {
  return (
    <Container className="card">
      <Image>
        <img src={props.image} alt="product image" />
      </Image>
      <Title>{props.title}</Title>
      <Price>{props.price}</Price>
    </Container>
  );
};

const Container = styled.div`
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    transform: scale(1.11);
  }
`;

const Image = styled.div`
  background-color: #ebebeb;
  max-width: 100%;
  border-radius: 10px;

  img {
    width: 100%;
  }
`;

const Title = styled.p`
  margin-top: 0.3rem;
  color: #324d67;
`;

const Price = styled.p`
  margin-top: 0.3rem;
  font-weight: bold;
`;

export default Card;
