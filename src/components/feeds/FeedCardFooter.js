import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { RowFlexDiv } from "../../styled";

const FeedCardFooter = ({postForFooter}) => {
  return (
    <LikeAndComments>
      <div>
        <FontAwesomeIcon icon={faCommentDots} size={"xl"} /> <span>{postForFooter.commentCount}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faThumbsUp} size={"xl"} /> <span>{postForFooter.like}</span>
      </div>
    </LikeAndComments>
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
  span{
    font-size: 14px;
  }
`;

export default FeedCardFooter;
