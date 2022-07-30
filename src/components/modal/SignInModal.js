import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const SignInModal = () => {
  const navigate = useNavigate();
  return (
    <>
      <ModalBg
        onClick={() => {
          navigate("/");
        }}
      ></ModalBg>
      <ModalBody>
        <Box>
          <LogIn>
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
                  width: "200px",
                  height: "2vh",
                  margin: "9px 0px 0px 10px",
                  border: "none",
                }}
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
                  width: "200px",
                  height: "2vh",
                  margin: "9px 0px 0px 10px",
                  border: "none",
                }}
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

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: block;

  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;

  width: fit-content;
  height: fit-content;

  padding: 5px;

  text-align: center;

  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  transform: translateX(-50%) translateY(-50%);
`;

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
