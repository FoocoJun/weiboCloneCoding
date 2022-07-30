import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { RowFlexDiv } from "../../styled";

const FeedCardFooter = () => {
  return (
    <LikeAndComments>
      <div>
        <FontAwesomeIcon icon={faCommentDots} size={"xl"} /> 21
      </div>
      <div>
        <FontAwesomeIcon icon={faThumbsUp} size={"xl"} /> 16
      </div>
    </LikeAndComments>
  );
};

const LikeAndComments = styled(RowFlexDiv)`
  justify-content: space-evenly;
  align-items: center;
  height: 45px;
  font-size: 14px;
  color: grey;
  div:hover {
    color: orange;
    cursor: pointer;
  }
`;

export default FeedCardFooter;
