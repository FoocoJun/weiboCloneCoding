import React from "react";
import styled from "styled-components";
import { devices } from "../device";

const RightSideSection = () => {


  return <Box >오른쪽 사이드 섹션입니다.</Box>;
};

const Box = styled.div`
  display: flex;
  position: sticky;
  top: 61px;

  width: 280px;
  border-radius: 0 4px 4px 0;
  background-color: #fff;
  height:${window.innerHeight - 120}px;
  @media ${devices.laptop} {
    display: none;
  }
  @media (max-height : 500px) {
    display: none;
  }
`;

export default RightSideSection;
