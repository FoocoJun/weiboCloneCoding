import React from "react";
import styled from "styled-components";
import FeedCardBody from "./FeedCardBody";
import FeedCardFooter from "./FeedCardFooter";
import FeedCardHeader from "./FeedCardHeader";

const Feed = ({tmpPost}) => {
  const postForHeader = {username:tmpPost.username,profileimage:tmpPost.profileimage,date:tmpPost.date};
  const postForBody = {images:tmpPost.images, contents:tmpPost.contents}
  const postForFooter = {commentCount:tmpPost.commentCount, like:tmpPost.like, postid:tmpPost.postid}
  return (
    <FeedCard>
      <FeedCardHeader postForHeader={postForHeader}/>
      <FeedCardBody postForBody={postForBody} />
      <FeedCardFooter postForFooter={postForFooter} />
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
