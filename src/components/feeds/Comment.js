import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { ColumnFlexDiv, RowFlexDiv } from "../../styled";

const Comment = () => {
  return (
    <CommentBox>
      <img src="https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg" />
      <UsernameAndContents>
        <UsernameAndTime>
          <span className="commenter">이범규</span>
          <span className="time">22-8-1 12:47</span>
        </UsernameAndTime>
        <div className="commentContents">
          클론 코딩은 잘 하고 있지?
        </div>
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
