import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../styled";

const FeedCardHeader = ({postForHeader}) => {
  return (
    <ProfileAndName>
      <div>
        <Image
          src={
            postForHeader.profileimage
          }
        />
      </div>
      <NameAndTime>
        <div>{postForHeader.username}</div>
        <small>{postForHeader.date}</small>
      </NameAndTime>
    </ProfileAndName>
  );
};
const ProfileAndName = styled(RowFlexDiv)`
  justify-content: start;
  div {
    width: fit-content;
    height: 55px;
    img {
      height: 50px;
      aspect-ratio: 1/1;
      border-radius: 100%;
      margin: 2.5px 2.5px;
      object-fit: cover;
    }
  }
`;
const NameAndTime = styled(ColumnFlexDiv)`
  padding-left: 10px;
  position: relative;
  top:6px;
  

  div {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight: bolder;

  }
  small {
    color:grey;
    position: relative;
    bottom:4px;
    padding-bottom: 5px;
    font-size: 12px;
  }
`;

export default FeedCardHeader;
