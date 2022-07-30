import React from "react";
import styled from "styled-components";
import FeedCardBody from "./FeedCardBody";
import FeedCardFooter from "./FeedCardFooter";
import FeedCardHeader from "./FeedCardHeader";

const Feed = () => {
  return (
    <FeedCard>
      <FeedCardHeader />
      <FeedCardBody />
      <FeedCardFooter />
    </FeedCard>
  );
};

const FeedCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #fff;
  width: 100%;
  /* height: 300px; */
  height: fit-content;
  padding: 10px;
`;
export default Feed;
