import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import styled from "styled-components";
import { keepScrollPosition } from "../redux/modules/clutters";
import CenterFeedSection from "../components/main/CenterFeedSection";
import HeaderNavBar from "../components/main/HeaderNavBar";
import LeftSideSection from "../components/main/LeftSideSection";
import DetailModal from "../components/modal/DetailModal";
import SignInModal from "../components/modal/SignInModal";

import RightSideSection from "../components/main/RightSideSection";
import { devices } from "../device";
import { ColumnFlexDiv } from "../styled";

const MainPage = () => {
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScrollPosition(scrolled);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  React.useEffect(() => {
    dispatch(keepScrollPosition(parseInt(scrollPosition * 100)));
  });
  return (
    <ColumnFlexDiv>
      {/* <OnTopVideo
        loop="loop"
        autoPlay
        preload=""
        muted="muted"
        src="https://a.sinaimg.cn/mintra/pic/2112130543/weibo_login.mp4"
        poster="https://a.sinaimg.cn/mintra/pic/2112130400/18weibo_login.png"
      /> */}
      <HeaderNavBar />
      <MainFlexSection>
        <LeftSideSection />
        <CenterFeedSection />
        <RightSideSection />
      </MainFlexSection>
      <Routes>
        <Route path="/detail/:postid" element={<DetailModal />} />
        <Route path="/signin" element={<SignInModal />} />
      </Routes>
    </ColumnFlexDiv>
  );
};

const MainFlexSection = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
  z-index:0;
  /* margin: 270px auto 0; */
  @media ${devices.mobileL} {
    width: 100%;
    /* margin: 0 auto; */
  }
`;
// const OnTopVideo = styled.video`
//   height: 330px;
//   width: 100%;
//   position: absolute;
//   left: 50%;
//   top: 0%;
//   transform: translateX(-50%);
//   bottom: 0;
//   z-index: 999;
//   object-fit: cover;
//   @media ${devices.mobileL} {
//     display:none;
//   }
// `;

export default MainPage;
