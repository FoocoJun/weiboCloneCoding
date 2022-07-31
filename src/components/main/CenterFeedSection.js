import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { Routes, Route } from "react-router-dom";

import Feed from "../feeds/Feed";
import PostBox from "../PostBox";

const CenterFeedSection = () => {
  return (
    <Box>
      <Routes>
        <Route path="/post" element={<PostBox />} />
      </Routes>
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  margin: 0 10px;
  @media ${devices.laptop} {
    width: 100%;
  }
  @media (max-height: 500px) {
    width: 100%;
  }
`;

export default CenterFeedSection;