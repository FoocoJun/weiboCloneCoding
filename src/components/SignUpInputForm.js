import React from "react";
import styled from "styled-components";

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
        <input type="password" placeholder="비밀번호 확인하라 해" />
      </InputCard>
      <InputCard>
        <p>프로필 사진 :</p>
        <input type="file" />
      </InputCard>
      <button>회원가입</button>
    </SignUpInputFormBox>
  );
};

const SignUpInputFormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 20px;
`;
const InputCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SignUpInputForm;