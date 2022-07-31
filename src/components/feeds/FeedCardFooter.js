import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { RowFlexDiv } from "../../styled";

const FeedCardFooter = () => {
  return (
    <LikeAndComments>
      <div>
        <FontAwesomeIcon icon={faCommentDots} size={"xl"} /> <span>21</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faThumbsUp} size={"xl"} /> <span>16</span>
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
    cursor: pointer;
  }
  span{
    font-size: 14px;
  }
`;

export default FeedCardFooter;
