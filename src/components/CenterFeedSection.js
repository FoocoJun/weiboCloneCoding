import React from "react";
import styled from "styled-components";
import { devices } from "../device";

const CenterFeedSection = () => {
  return <Box>중앙 피드박스 입니다.</Box>;
};

const Box = styled.div`
  display: flex;

  width: 50%;
  height: 4500px;
  margin: 0 10px;
  background-color: #fff;
  @media ${devices.laptop} {
    width: 100%;
  }
`;

export default CenterFeedSection;
