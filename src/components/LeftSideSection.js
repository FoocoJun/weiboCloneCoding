import React from "react";
import styled from "styled-components";
import { devices } from "../device";

const LeftSideSection = () => {
  return (
    <div
      style={{
        height: "4500px",
      }}
    >
      <Box>
      왼쪽 사이드 섹션입니다.
      </Box>
    </div>
  );
};

const Box = styled.div`
  display: flex;
  position: sticky;
  top: 60px;

  width: 182px;
  height: 100vh;
  border: 2px solid lightgray;

  @media ${devices.mobileL} {
    display: none;
  }
`;

export default LeftSideSection;
