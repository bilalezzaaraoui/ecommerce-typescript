import styled from "styled-components";
import FirstBanner from "../../components/homepage/firstBanner/FirstBanner";
import stereo from "../../assets/images/stereo.webp";
import Card from "../../components/homepage/card/Card";
import SecondBanner from "../../components/homepage/seconBanner/SecondBanner";

const Home = () => {
  const data = [
    { image: stereo, title: "boAt Party Pal 50", price: "$56" },
    { image: stereo, title: "boAt Party Pal 50", price: "$56" },
    { image: stereo, title: "boAt Party Pal 50", price: "$56" },
    { image: stereo, title: "boAt Party Pal 50", price: "$56" },
    { image: stereo, title: "boAt Party Pal 50", price: "$56" },
    { image: stereo, title: "boAt Party Pal 50", price: "$56" },
    { image: stereo, title: "boAt Party Pal 50", price: "$56" },
    { image: stereo, title: "boAt Party Pal 50", price: "$56" },
  ];
  return (
    <Container>
      <FirstBanner />
      <Title>Best Seller Products</Title>
      <SubTitle>speaker There are many variations passages</SubTitle>
      <GridLayout>
        {data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </GridLayout>
      <SecondBanner />
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

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  color: #324d67;
  font-size: 2.5rem;
  margin-top: 1rem;
`;

const SubTitle = styled.h3`
  text-align: center;
  font-weight: 300;
  color: #324d67;
`;

const GridLayout = styled.div`
  margin: 2rem 0;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;

  .card:nth-child(1) {
    grid-row: 1 / span 2;
  }

  @media (max-width: 1330px) {
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
    margin: 2rem auto;

    .card:nth-child(1) {
      grid-row: 1 / span 1;
    }
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default Home;
