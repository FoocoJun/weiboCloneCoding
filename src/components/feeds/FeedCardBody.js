import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import { ColumnFlexDiv } from "../../styled";

const FeedCardBody = () => {
  return (
    <StoryAndPictures>
      <div>
        动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。
      </div>
      <div>
        <Image src={"https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351"} alt="" />
      </div>
    </StoryAndPictures>
  );
};

const StoryAndPictures = styled(ColumnFlexDiv)`
  padding-left: 65px;
  padding-right: 15px;
  height: fit-content;
  justify-content: space-between;
  img {
    height: 132px;
    aspect-ratio: 1/1;
    border-radius: 4px;
    margin: 2px;
    object-fit: cover;
    cursor:zoom-in;
    &:hover{
      filter:brightness(80%)
    }
  }
  div {
    word-wrap: break-word;
    white-space: pre-wrap;
    font-size: 0.75rem;
    margin-bottom:5px;
  }
`;
export default FeedCardBody;
