import React from "react";
import styled from "styled-components";
import { devices } from "../device";

const SignUpInputForm = () => {
  return (
    <SignUpInputFormBox>
      <InputCard>
        <p>아이디 :</p>
        <input type="text" placeholder="아이디를 입력하세요" />
      </InputCard>
      <InputCard>
        <p>비밀번호 :</p>
        <input type="password" placeholder="비밀번호 입력하라 해" />
      </InputCard>
      <InputCard>
        <p>비밀번호 확인 :</p>
        <input type="password" placeholder="비밀번호 확인하라 해"/>
      </InputCard>
      <InputCard>
        <p>프로필 사진 :</p>
        <input type="file" multiple/>
      </InputCard>
      <InputCard>
        <p></p>
        <button>
          <span>회원가입</span>
        </button>
      </InputCard>
    </SignUpInputFormBox>
  );
};

const SignUpInputFormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 20px;
  button {
    width: 200px;
    height: 40px;
    border: 1px solid #ff9b01;
    border-radius: 2px;
    margin-left: 5px;
    background: #ffa00a;
    cursor: pointer;

    span {
      display: flex;
      justify-content: center;
      color: #fff;

      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }

    &:hover {
      background: linear-gradient(180deg, #ffb33b, #ffa00a);
    }
  }
  @media ${devices.mobileL} {
    width: 90%;
    margin: 20px auto;
  }
`;
const InputCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 5px 0;
  p {
    width: 120px;
    font-size: 0.8rem;
    font-weight: bolder;
    text-align: right;
    @media ${devices.mobileL} {
        display:none;
    }
  }
  input {
    height: 1.5rem;
    margin-left: 5px;
  }
  @media ${devices.mobileL} {
        justify-content:center;
    }
`;

export default SignUpInputForm;
