import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { RowFlexDiv } from "../../styled";
import CommentsBox from "./CommentsBox";

const FeedCardFooter = ({ postForFooter }) => {
  const [isCommentsBoxOpen, setIsCommentsBoxOpen] = React.useState(false);
  const commentsRef = React.useRef();

  const ToggleCommentBox = () => {
    if (isCommentsBoxOpen) setIsCommentsBoxOpen(false);
    else setIsCommentsBoxOpen(true);
  };
  const CommentBoxOpenCloseEvent = () => {
    if (!isCommentsBoxOpen) {
      commentsRef.current.style.color = "orange";
      commentsRef.current.style.textShadow = "1px 1px 10px orange";
    } else {
    commentsRef.current.style.color = "grey";
    commentsRef.current.style.textShadow = "none";}
  };

  React.useEffect(() => {
    commentsRef.current.addEventListener("click", CommentBoxOpenCloseEvent);
  });

  return (
    <div>
      <LikeAndComments>
        <div ref={commentsRef} onClick={ToggleCommentBox}>
          <FontAwesomeIcon icon={faCommentDots} size={"xl"} />{" "}
          <span>{postForFooter.commentCount}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faThumbsUp} size={"xl"} />{" "}
          <span>{postForFooter.like}</span>
        </div>
      </LikeAndComments>
      {isCommentsBoxOpen && <CommentsBox postid={postForFooter.postid}/>}
    </div>
  );
};

const LikeAndComments = styled(RowFlexDiv)`
  justify-content: space-evenly;
  align-items: center;
  height: 45px;
  font-size: 12px;
  color: grey;
  div:hover {
    color: orange;
    text-shadow: 1px 1px 10px orange;
    cursor: pointer;
  }
  span {
    font-size: 14px;
  }
`;

export default FeedCardFooter;
