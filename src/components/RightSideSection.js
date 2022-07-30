import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { devices } from "../device";

import InfoBox from "./InfoBox";
import SignInModal from "./modal/SignInModal";

const RightSideSection = () => {
  const scrollPosition = useSelector((state) => state.clutters.scrollPosition);
  console.log(scrollPosition);
  return (
    <Box>
      <Countainer
        style={{ display: `${scrollPosition < 60 ? "flex" : "none"}` }}
      >
        <div />
        <InfoBox />
      </Countainer>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  position: sticky;
  top: 60px;

  width: 282px;
  height: ${window.innerHeight - 80}px;

  @media ${devices.laptop} {
    display: none;
  }
`;

const Countainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default RightSideSection;
