import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { ColumnFlexDiv, RowFlexDiv } from "../../styled";

const Comment = ({ tmpComment }) => {
  return (
    <CommentBox>
      <img src={tmpComment?.userprofileimage ? tmpComment.userprofileimage : "data:image/png;base64,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"} />
      <UsernameAndContents>
        <UsernameAndTime>
          <span className="commenter">{tmpComment.username}</span>
          <span className="time">{tmpComment?.createdAt.substring(0,10)}</span>
        </UsernameAndTime>
        <div className="commentContents">{tmpComment?.contents}</div>
      </UsernameAndContents>
    </CommentBox>
  );
};

const CommentBox = styled(RowFlexDiv)`
  margin: 10px 0;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 100%;
  }
`;
const UsernameAndTime = styled(RowFlexDiv)`
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;
const UsernameAndContents = styled(ColumnFlexDiv)`
  width: 100%;
  flex-wrap: wrap;
  .commenter {
    width: fit-content;
    color: #ff5900;
    margin: 0 5px 0 0;
    font-size: 0.9rem;
  }
  .time {
    color: #cdcdcd;
    font-weight: lighter;
    font-size: 0.9rem;
  }
  .commentContents {
    font-size: 0.9rem;
  }
`;

export default Comment;
