import { Fragment } from "react";
import styled from "styled-components";

const InfiniteScroll = () => {
  return (
    <Container>
      {/* <div className="c">
        <div className="card-home">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          {
            // copy the number of spans displayed at the beggining onto the end
          }{" "}
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div> */}

      <div className="c">
        <div className="card-home">
          <div className="box-layout">
            <div className="image-box">
              <img
                src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
                alt="photo of the product"
              />
            </div>
            <div className="text-box">
              <p className="text-title">boAt Rockerz 451</p>
              <p className="text-price">$55</p>
            </div>
          </div>
          <div className="box-layout">
            <div className="image-box">
              <img
                src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
                alt="photo of the product"
              />
            </div>
            <div className="text-box">
              <p className="text-title">boAt Rockerz 451</p>
              <p className="text-price">$55</p>
            </div>
          </div>{" "}
          <div className="box-layout">
            <div className="image-box">
              <img
                src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
                alt="photo of the product"
              />
            </div>
            <div className="text-box">
              <p className="text-title">boAt Rockerz 451</p>
              <p className="text-price">$55</p>
            </div>
          </div>{" "}
          <div className="box-layout">
            <div className="image-box">
              <img
                src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
                alt="photo of the product"
              />
            </div>
            <div className="text-box">
              <p className="text-title">boAt Rockerz 451</p>
              <p className="text-price">$55</p>
            </div>
          </div>{" "}
          <div className="box-layout">
            <div className="image-box">
              <img
                src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
                alt="photo of the product"
              />
            </div>
            <div className="text-box">
              <p className="text-title">boAt Rockerz 451</p>
              <p className="text-price">$55</p>
            </div>
          </div>{" "}
          <div className="box-layout">
            <div className="image-box">
              <img
                src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
                alt="photo of the product"
              />
            </div>
            <div className="text-box">
              <p className="text-title">boAt Rockerz 451</p>
              <p className="text-price">$55</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .c {
    overflow: hidden;
    margin: 3rem 0 7rem;

    .card-home {
      display: flex;
      column-gap: 1.5rem;
      height: 100%;
      position: relative;
      left: 0;
      animation: scroll 8s linear 1s infinite;
      transition: 0.3s;

      @keyframes scroll {
        0% {
          transform: translateX(0px);
        }
        100% {
          transform: translateX(-270px);
        }
      }

      &:hover {
        animation-play-state: paused;
      }

      .box-layout {
        min-width: 250px;
        min-height: 190px;
        display: flex;
        flex-direction: column;
        cursor: pointer;

        .image-box {
          height: 80%;
          background-color: #ebebeb;
          border-radius: 10px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .text-box {
          margin: 5px 0;
          .text-title {
            color: #324d67;
          }

          .text-price {
            color: black;
            font-weight: bold;
            margin: 5px 0;
          }
        }
      }
    }
  }
`;

export default InfiniteScroll;
