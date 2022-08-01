import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../styled";
import Comment from "./Comment";

const CommentsBox = () => {

  const postCommentRef = React.useRef();

  const submitToComment = (e) => {
    e.preventDefault();
    let tmpCommentData = {
      comment: postCommentRef.current.value,
    };
    console.log(tmpCommentData);
  };


  return (
    <CommentBoxCard>
      <CommentInputAndComment onSubmit={submitToComment}>
        <div className="CommentInput">
          <input ref={postCommentRef} type="text" placeholder="发布你的评论" />
        </div>
        <div className="CommentPost">
          <button type="">评论</button>
        </div>
      </CommentInputAndComment>
      <span>按时间</span>
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
      <button>{"더보기 >"}</button>
    </CommentBoxCard>
  );
};

const CommentBoxCard = styled(ColumnFlexDiv)`
  padding: 10px 20px;
  span {
    font-weight: bold;
    font-size: 0.9rem;
    color: #ff8200;
  }
  button {
    border: none;
    background-color: rgba(0, 0, 0, 0.01);
    &:hover {
      color: #ff8200;
    }
  }
`;
const CommentInputAndComment = styled.form`
  display: flex;
  flex-direction: column;
  .CommentInput {
    height: 40px;
    padding: 5px 10px;
    margin-bottom: 10px;
    border: solid 1px #ff8200;
    border-radius: 4px;
    input {
      width: 100%;
      height: 100%;
      border: none;
      color: grey;
      font-size: 14px;
      &:focus {
        outline: none;
        color: black;
      }
    }
  }
  .CommentPost {
    display: flex;
    flex-direction: row;
    justify-content: end;

    padding-bottom: 10px;
    border-bottom: solid 1px #cdcdcd;
    border-color: rgba(0, 0, 0, 0.05);
    button {
      display: flex;
      justify-content: center;
      align-content: center;

      height: 30px;
      width: 70px;
      border-radius: 15px;
      border: none;

      text-align: center;
      font-weight: bolder;
      line-height: 1.6rem;

      cursor: pointer;
      font-size: 0.9rem;

      background: #ff8200;
      color: #fff;

      &:hover {
        background-color: #ff5900;
      }
    }
  }
`;

export default CommentsBox;
