import React from "react";
import styled from "styled-components";
import { devices } from "../device";
import { Link } from "react-router-dom";
import NumberButton from "./buttons/NumberButton";

const ToSignInBox = () => {
  return (
    <ToSignInBoxView>
      <p>
        Already Registered, <Link to={"/"} style={{ textDecoration: "none", color: "#0a8cd2" }}>Login Now»</Link>
      </p>
      <hr/>
      <p>微博注册帮助</p>
      <NumberButton number={1} string={"注册微博账号的常见问题"}/>
      <NumberButton number={2} string={"手机号/邮箱在注册微博时提示已被注册"}/>
      <NumberButton number={3} string={"进行短信验证时没有收到验证码，该怎么办？"}/>
      <NumberButton number={4} string={"注册提示频繁怎么办？"}/>
      <Link to={"/"} style={{ textDecoration: "none", color: "#0a8cd2", fontSize:".7rem"}}>More help»</Link>
    </ToSignInBoxView>
  );
};

const ToSignInBoxView = styled.div`
  width: 30%;
  margin: 20px;
  @media ${devices.mobileL} {
    width: 90%;
    margin: 0 auto;
  }
  hr {
    border:none;
    border-bottom: dotted 1px #cdcdcd;
    border-width:1px;
    border-radius: 5px;
    width: 100%;
  }
  p {
    font-size: 0.9rem;
    margin-bottom:0.6rem;
  }
`;

export default ToSignInBox;
