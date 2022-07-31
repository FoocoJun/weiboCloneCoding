import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>환영합니다.</h1>
      <button onClick={() => navigate("/")}>Main</button>
    </>
  );
};

export default NotFoundPage;
