import React from "react";
import { Routes, Route } from "react-router-dom";
import CenterFeedSection from "../CenterFeedSection";
import HeaderNavBar from "../HeaderNavBar";
import LeftSideSection from "../LeftSideSection";
import DetailModal from "../modal/DetailModal";
import RightSideSection from "../RightSideSection";

const MainPage = () => {
  return (
    <div>
      <HeaderNavBar />
      <LeftSideSection />
      <RightSideSection />
      <CenterFeedSection />
      메인 페이지입니다!
      <Routes>
        <Route path="/detail/:postid" element={<DetailModal />} />
      </Routes>
    </div>
  );
};

export default MainPage;
