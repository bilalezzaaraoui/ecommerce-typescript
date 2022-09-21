import { Fragment } from "react";
import styled from "styled-components";

const ImagePanel = () => {
  return (
    <Fragment>
      <Box>
        <img
          src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
          alt="image of the product"
        />
      </Box>
      <LittleBox>
        <Option>
          <img
            src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
            alt="image of the product"
          />
        </Option>
        <Option>
          <img
            src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
            alt="image of the product"
          />
        </Option>
        <Option>
          <img
            src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
            alt="image of the product"
          />
        </Option>{" "}
        <Option>
          <img
            src="https://cdn.sanity.io/images/kyml1h03/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp"
            alt="image of the product"
          />
        </Option>
      </LittleBox>
    </Fragment>
  );
};

const Box = styled.div`
  width: 100%;
  height: 80%;
  background-color: #ebebeb;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    background-color: red;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const LittleBox = styled.div`
  height: 20%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
`;
const Option = styled.div`
  background-color: #ebebeb;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: red;
  }

  img {
    width: 100%;
  }
`;

export default ImagePanel;
