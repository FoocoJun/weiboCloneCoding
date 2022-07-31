import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../styled";

const FeedCardHeader = () => {
  return (
    <ProfileAndName>
      <div>
        <Image
          src={
            "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836"
          }
        />
      </div>
      <NameAndTime>
        <div>송하준</div>
        <small>2小时前</small>
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
