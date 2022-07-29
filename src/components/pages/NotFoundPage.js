import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>잘못된 접근입니다.</h1>
      <button onClick={() => navigate("/")}>Main</button>
    </>
  );
};

export default NotFoundPage;
