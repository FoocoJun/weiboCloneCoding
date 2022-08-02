import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../styled";

const FeedCardBody = ({ postForBody }) => {
  return (
    <StoryAndPictures>
      <div>{postForBody.contents}</div>
      <div>
        {postForBody.images[1] &&
          postForBody.images.map((val, idx) => {
            return (
              <Image key={"StoryAndPicturesImage" + idx} src={val} height={"132px"} alt="" />
            );
          })}
        {!postForBody.images[1] && (
          <Image src={postForBody.images[0]} width={"100%"} height={"180px"} alt="" />
        )}
      </div>
    </StoryAndPictures>
  );
};

const StoryAndPictures = styled(ColumnFlexDiv)`
  padding-left: 65px;
  padding-right: 15px;
  height: fit-content;
  justify-content: space-between;
  img {
    /* height: 132px; */
    aspect-ratio: 1/1;
    border-radius: 4px;
    margin: 2px;
    object-fit: cover;
    cursor: zoom-in;
    &:hover {
      filter: brightness(80%);
    }
  }
  div {
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.75rem;
    margin-bottom: 5px;
  }
`;
export default FeedCardBody;
