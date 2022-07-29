import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import CenterFeedSection from "../CenterFeedSection";
import HeaderNavBar from "../HeaderNavBar";
import LeftSideSection from "../LeftSideSection";
import DetailModal from "../modal/DetailModal";
import RightSideSection from "../RightSideSection";

const MainPage = () => {
  return (
    <div>
      <HeaderNavBar />
      <MainFlexSection>
      <LeftSideSection />
      <CenterFeedSection />
      <RightSideSection />
      </MainFlexSection>
      메인 페이지입니다!
      <Routes>
        <Route path="/detail/:postid" element={<DetailModal />} />
      </Routes>
    </div>
  );
};

const MainFlexSection= styled.div`
display:flex;
justify-content: center;
width: 90%;
max-width: 1140px;
margin: 0 auto;


`

export default MainPage;
