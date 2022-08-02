import React from "react";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../styled";
import Comment from "./Comment";

const CommentsBox = ({postid}) => {
  const postCommentRef = React.useRef();
  const [showMore, setShowMore] = React.useState(0);

  // /api/post/{postid}/comment

  const tmpTmpComment = [
    {
      commentid: 0,
      writer: {
        username: "김하늘",
        profile:
          "https://dynamic-assets.gather.town/sprite/avatar-MvE2ZWzmKw22ibzrWw27-C0ykfrlDx7AkQsLyLcNS-igRBasdJCxtfIyNetCfx-Thh1O95hOZKq4yyTmVQD-fgLJCRdImOOXUf2MnJ7L-HOCDKsZpKFjYTksp8fsm-6yyOhnEZtdSkSXfExxKZ-7EyjSDVlNscTAlYLSHV1.png",
      },
      content: "저 너ㅜ ㅈㅎㄹ령ㅅ",
      createdAt: "22-8-1 12:47",
    },
    {
      commentid: 1,
      writer: {
        username: "조현오",
        profile:
          "https://dynamic-assets.gather.town/sprite/avatar-dQCYs4n7O99ksXuBIe33-igRBasdJCxtfIyNetCfx-sGropwmL9Vh8DTMp8ZXS-agEvFKFD4Ta3MQ09ENbU-WaMM8u1pW2GyKfBCGCZp-D7Bk8qHiLC9XMixzYqAf-7EyjSDVlNscTAlYLSHV1.png",
      },
      content: "앗....아아..",
      createdAt: "22-8-2 09:21",
    },
    {
      commentid: 2,
      writer: {
        username: "이범규",
        profile:
          "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      },
      content: "다들 클론 코딩은 잘 하고 있지?",
      createdAt: "22-8-2 14:21",
    },
    {
      commentid: 3,
      writer: {
        username: "이범규",
        profile:
          "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      },
      content: "다들 포기하지 말고 힘내자!",
      createdAt: "22-8-2 14:22",
    },
    {
      commentid: 4,
      writer: {
        username: "이범규",
        profile:
          "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      },
      content: "대답은?",
      createdAt: "22-8-2 14:27",
    },
    {
      commentid: 5,
      writer: {
        username: "구자현",
        profile:
          "https://dynamic-assets.gather.town/sprite/avatar-Qnb3tLvFFdDMnQC2mnLG-dQCYs4n7O99ksXuBIe33-SGvXxexEtsLgU9XfbVbM-OmaczRQWSUdZqN1GfC0W-BSWPiQkD8QoinO6MugIq-dNWTrrAPb6Z7INrS3mk6.png",
      },
      content: "네.",
      createdAt: "22-8-2 16:27",
    },
  ];

  const [tmpComment, setTmpComment] = React.useState(tmpTmpComment);

  let filteredComments = tmpComment.filter((val, idx) => idx < 2 ** showMore);

  const toShowMore = (e) => {
    e.preventDefault();
    setShowMore(showMore + 1);
  };

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
        {filteredComments.map((val, idx) => {
          return <Comment key={"BoxComment" + idx} tmpComment={val} />;
        })}
      </div>
      {!(2 ** showMore >= tmpComment.length) && (
        <button onClick={toShowMore}>{"더보기 >"}</button>
      )}
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
