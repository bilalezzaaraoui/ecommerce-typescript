import styled from "styled-components";
import Details from "../../components/product/detail/Details";
import InfiniteScroll from "../../components/product/infiniteScroll/InfiniteScroll";

const Product = () => {
  return (
    <Container>
      <Details />
      <Title>You may also like</Title>
      <InfiniteScroll />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1400px;
  padding: 0 1rem;
  margin: 0 auto;
`;

const Title = styled.h3`
  color: #324d67;
  text-align: center;
  font-weight: bold;
  font-size: 1.8rem;
  margin: 4rem 0 2rem;
`;

export default Product;
