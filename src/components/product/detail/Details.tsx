import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";
import ImagePanel from "../imagePanel/ImagePanel";

const Details = () => {
  return (
    <Container>
      <ImageBloc>
        <ImagePanel />
      </ImageBloc>
      <TextBloc>
        <h1>boAt BassHeads 900</h1>
        <ul>
          <li>
            <AiFillStar color="red" />
          </li>
          <li>
            <AiFillStar color="red" />
          </li>
          <li>
            <AiFillStar color="red" />
          </li>
          <li>
            <AiFillStar color="red" />
          </li>
          <li>
            <AiOutlineStar color="red" />
          </li>
        </ul>
        <h3>Details:</h3>
        <p className="bio">
          The boAt BassHeads 900 wired headphones come with an amalgamation of
          style with performance. Now get ready to enjoy your favourite tunes
          with Super Extra Bass and crystal-clear sound performance with Bass
          Heads 900 wired headphones. Experience powerful, dynamic sound with
          punchy bass and clear, natural vocals with the responsive 40mm
          Neodymium drivers, the drivers effectively reproduce sound equally
          across the whole audio band. The ergonomic design creates passive
          attenuation of ambient noise while providing maximum comfort for hours
          of listening pleasure in a snuggly fit without fatigue. The sleek,
          lightweight, and compact design makes portability extremely
          convenient. The foldable and compact Feather Light Headphone weighs
          even less than 150 g, moreover, the ear cups can be folded for easy,
          convenient storage.
        </p>
        <p className="price">$49</p>
        <Quantity>
          <p>Quantity:</p>
          <QtyLayout>
            <div>
              <FaMinus />
            </div>
            <div>1</div>
            <div>
              <FaPlus />
            </div>
          </QtyLayout>
        </Quantity>
        <BtnLayout>
          <AddToCart>Add to Cart</AddToCart>
          <BuyNow>Buy Now</BuyNow>
        </BtnLayout>
      </TextBloc>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  column-gap: 2rem;
  margin: 2rem 0;
`;

const ImageBloc = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const TextBloc = styled.div`
  width: 70%;

  h1 {
    color: #324d67;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0.3rem 0;

    svg {
      font-size: 0.9rem;
    }
  }

  h3 {
    color: #324d67;
    font-weight: bold;
    font-size: 1rem;
  }

  .bio {
    color: #324d67;
    font-size: 1rem;
    margin-top: 0.8rem;
    padding-right: 5rem;
  }

  .price {
    color: red;
    font-weight: bold;
    margin: 1rem 0;
    font-size: 1.8rem;
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;

  p {
    color: #324d67;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const QtyLayout = styled.div`
  display: flex;

  div {
    padding: 10px 15px;
    border: 1px solid black;
  }

  div:nth-child(1) {
    svg {
      color: red;
    }
  }

  div:nth-child(3) {
    svg {
      color: green;
    }
  }

  div:nth-child(2),
  div:nth-child(3) {
    padding: 10px 15px;
    border-left: none;
  }
`;

const BtnLayout = styled.div`
  display: flex;
  column-gap: 2rem;
  margin: 2rem 0;
`;
const AddToCart = styled.button`
  border: 2px solid red;
  background-color: transparent;
  padding: 0.7rem 3.5rem;
  color: red;
  font-size: 1.1rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
const BuyNow = styled.button`
  border: 2px solid red;
  background-color: red;
  padding: 0.7rem 3.5rem;
  color: white;
  font-size: 1.1rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Details;
