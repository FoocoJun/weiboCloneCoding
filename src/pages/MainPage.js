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
import NotFoundPage from "./NotFoundPage";
import { devices } from "../device";

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

  React.useEffect(()=>{
    dispatch(keepScrollPosition(parseInt(scrollPosition * 100)));
  })
  return (
    <div>
      
      <HeaderNavBar />
      <MainFlexSection>
        <LeftSideSection />
        <CenterFeedSection />
        <RightSideSection/>
      </MainFlexSection>
      <Routes>
        <Route path="/detail/:postid" element={<DetailModal />} />
        <Route path="/signin" element={<SignInModal />} />
      </Routes>
    </div>
  );
};

const MainFlexSection = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export default MainPage;
