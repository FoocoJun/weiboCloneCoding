import React from "react";
import styled from "styled-components";
import { devices } from "../device";

const SignUpInputForm = () => {
  const [profileUploadImg, setProfileUploadImg] = React.useState([]);
  const [img, setImg] = React.useState(""); //이미지 미리보기
  const [imgs, setImgs] = React.useState([]); //이미지들 미리보기
  const signUpAttentionRef = React.useRef();
  const imagePreviewNameRef = React.useRef();

  const signUpUsernameRef = React.useRef();
  const signUpPasswordRef = React.useRef();
  const signUpPWCheckRef = React.useRef();

  const checkPictureCorrect = (e) => {
    signUpAttentionRef.current.innerText = null;
    imagePreviewNameRef.current.innerText = null;
    setProfileUploadImg(null);
    setImg(null);

    const correctForm = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
    if (e.target.files[0]?.size > 3 * 1024 * 1024) {
      signUpAttentionRef.current.innerText =
        "파일 사이즈는 3MB까지만 가능합니다.";
      return;
    } else if (!e.target?.files[0]) {
      imagePreviewNameRef.current.style.width = "0px";
      signUpAttentionRef.current.innerText = "";
      return;
    } else if (!e.target?.files[0]?.name.match(correctForm)) {
      imagePreviewNameRef.current.style.width = "0px";
      signUpAttentionRef.current.innerText = "이미지 파일만 업로드 가능합니다.";
      return;
    }

    let array = Array.from(e.target.files);
    let copyPreview = [...array];
    setProfileUploadImg(copyPreview); //업로드 원본 파일'들' state : 추후 게시글 다중 업로드
    console.log(copyPreview);
    imagePreviewNameRef.current.innerText = copyPreview[0].name;

    for (let i = 0; i < array.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(array[i]);
      reader.onload = (e) => {
        setImg(e.target.result); //미리보기 이미지 state

        //여러 사진의 DataURL 결과물들을 imgs state에 담음
        let tmp_array = imgs.concat([e.target.result]);
        setImgs(tmp_array);
      };
    }
  };
  
  // 서브밋 함수
  const submitToSignUp = (e) => {
    e.preventDefault()
    let tmpSignupData = {
      username: signUpUsernameRef.current.value,
      password: signUpPasswordRef.current.value,
      passwordCheck: signUpPWCheckRef.current.value,
      userprofileimage: profileUploadImg,
    };

    console.log(tmpSignupData)
  };

  return (
    <SignUpInputFormBox onSubmit={submitToSignUp}>
      <InputCard>
        <div>아이디 :</div>
        <input ref={signUpUsernameRef} type="text" placeholder="아이디를 입력하세요" required />
      </InputCard>
      <InputCard>
        <div>비밀번호 :</div>
        <input ref={signUpPasswordRef} type="password" placeholder="비밀번호 입력하라 해" required />
      </InputCard>
      <InputCard>
        <div>비밀번호 확인 :</div>
        <input ref={signUpPWCheckRef} type="password" placeholder="비밀번호 확인하라 해" required />
      </InputCard>
      <InputCard>
        <div>프로필 사진 :</div>
        <label htmlFor="picInput">사진 업로드</label>
        <input
          id="picInput"
          type="file"
          accept={"image/*"}
          onChange={checkPictureCorrect}
          required
        />
      </InputCard>
      <InputCard>
        <div />
        {img && <img src={img} height={"32px"} width={"32px"} />}
        <small ref={imagePreviewNameRef} style={{ color: "black" }}></small>
      </InputCard>
      <InputCard>
        <div />
        <small ref={signUpAttentionRef}></small>
      </InputCard>
      <InputCard>
        <div></div>
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

  #picInput {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
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
  div {
    width: 120px;
    font-size: 0.8rem;
    font-weight: bolder;
    text-align: right;
    @media ${devices.mobileL} {
      display: none;
    }
  }
  input {
    height: 1.8rem;
    margin-left: 5px;
  }
  label {
    display: inline-block;
    padding: 5px;
    margin-left: 5px;
    color: #ffa00a;
    font-size: 12px;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #cdcdcd;
    border-radius: 4px;
    &:hover {
      background-color: #ffa00a;
      color: #fff;
    }
  }
  small {
    color: red;
    margin-left: 5px;
  }
  img {
    margin-left: 5px;
  }

  @media ${devices.mobileL} {
    justify-content: center;
  }
`;

export default SignUpInputForm;
