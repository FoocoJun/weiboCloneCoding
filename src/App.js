import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import styled from "styled-components";
import { loadSessionDataMW } from "./redux/modules/users";

function App() {
  const dispatch = useDispatch();
  const authorization = useSelector((state) => state.users.authorization);
  console.log(authorization)
  React.useEffect(() => {
    let sessionStorage = window.sessionStorage;
    sessionStorage.getItem("authorization") && dispatch(loadSessionDataMW());
  }, []);

  return (
    <AppBg>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/*" element={<MainPage />} />
        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </AppBg>
  );
}

const AppBg = styled.div`
  background-color: #f5f5f5;
`;

export default App;
