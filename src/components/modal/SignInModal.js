import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { ModalBg, ModalBody } from "../../styled";
import axios from "axios";
import { keepAuthDataMW } from "../../redux/modules/users";

const SignInModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signInUsernameRef = React.useRef();
  const signInPasswordRef = React.useRef();

  const submitToSignin = async (e) => {
    e.preventDefault();
    let tmpSignInData = {
      username: signInUsernameRef.current.value,
      password: signInPasswordRef.current.value,
    };
    console.log(tmpSignInData);

    dispatch(keepAuthDataMW(tmpSignInData, navigate));
    // await axios({
    //   method: "post",
    //   url: process.env.REACT_APP_DB_HOST + "/login",
    //   data: tmpSignInData,
    // })
    //   .then((Response) => {
    //     console.log(Response.headers.authorization);
    //     alert("로그인 성공");
    //     sessionStorage.setItem("authorization", Response.headers.authorization);
    //     navigate("/");
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      <ModalBg
        onClick={() => {
          navigate("/");
        }}
      ></ModalBg>
      <ModalBody>
        <Box>
          <LogIn onSubmit={submitToSignin}>
            <div
              className="Idbox"
              style={{
                width: "220px",
                height: "38px",
                border: "1px solid lightgray",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Icon
                icon={faUser}
                style={{
                  margin: "11px 0px 0px 15px",
                }}
              />

              <input
                type="text"
                placeholder="会员帐号"
                style={{
                  width: "170px",
                  height: "20px",
                  margin: "9px 0px 0px 10px",
                  border: "none",
                }}
                ref={signInUsernameRef}
                required
              />
            </div>

            <div
              className="Pwbox"
              style={{
                width: "220px",
                height: "38px",
                border: "1px solid lightgray",
                display: "flex",
                flexDirection: "row",
                marginTop: "15px",
              }}
            >
              <Icon
                icon={faLock}
                style={{
                  margin: "11px 0px 0px 15px",
                }}
              />

              <input
                type="password"
                placeholder="请输入密码"
                style={{
                  width: "170px",
                  height: "20px",
                  margin: "9px 0px 0px 10px",
                  border: "none",
                }}
                ref={signInPasswordRef}
                required
              />
            </div>

            <button>登录</button>
            <small>
              还没有微博？
              <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "#ff8200" }}
              >
                회원가입!
              </Link>
            </small>
          </LogIn>
        </Box>
      </ModalBody>
    </>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 280px;
  border: 2px solid lightgray;
  box-shadow: 0px 0px 30px lightgray;
`;

const LogIn = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 280px;
  width: 270px;
  background-color: #fff;
  border: 1px solid lightgray;
  small {
    width: 220px;
    display: flex;
    justify-content: start;
    margin-top: 5px;
  }
  button {
    width: 220px;
    height: 38px;
    margin-top: 15px;
    background-color: #ff8140;
    border: none;
    border-radius: 2px;
    color: white;
    font-size: 1rem;

    cursor: pointer;
    &:hover {
      background-color: #eb7350;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)``;
export default SignInModal;
