import React from "react";
import styled from "styled-components";
import { devices } from "../device";

const RightSideSection = () => {
  return<Box>오른쪽 사이드 섹션입니다.</Box>;
};

const Box = styled.div`
display: flex;
position: sticky;
top: 60px;

width: 280px;
height: 100vh;
border: 2px solid lightgray;
@media ${devices.laptop} {
    display: none;
  }



`;

export default RightSideSection;
