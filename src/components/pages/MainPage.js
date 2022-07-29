import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailModal from "../modal/DetailModal";

const MainPage = () => {
  return (
    <div>
      메인 페이지입니다.
      <Routes>
        <Route path="/detail/:postid" element={<DetailModal />} />
      </Routes>
    </div>
  );
};

export default MainPage;
