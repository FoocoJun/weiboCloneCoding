import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { ColumnFlexDiv, RowFlexDiv } from "../../styled";

const Comment = ({ tmpComment }) => {
  return (
    <CommentBox>
      <img src={tmpComment.writer.profile} />
      <UsernameAndContents>
        <UsernameAndTime>
          <span className="commenter">{tmpComment.writer.username}</span>
          <span className="time">{tmpComment.createdAt}</span>
        </UsernameAndTime>
        <div className="commentContents">{tmpComment.content}</div>
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
