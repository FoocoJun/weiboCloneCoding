import React from "react";
import styled from "styled-components";
import { devices } from "../device";

import InfoBox from "./InfoBox"

const RightSideSection = () => {
  return (
    <Box>
      <Countainer>
        <InfoBox/>


      </Countainer>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  position: sticky;
  top: 60px;

  width: 280px;
  height: ${window.innerHeight - 80}px;

  @media ${devices.laptop} {
    display: none;
  }
`;

const Countainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default RightSideSection;
