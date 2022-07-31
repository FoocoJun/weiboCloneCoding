import React from "react";
import styled from "styled-components";
import SignUpInputForm from "../SignUpInputForm";
import ToSignInBox from "../ToSignInBox";
import { devices } from "../../device";
import Copywrite from "../Copywrite";

const SignUpPage = () => {
  return (
    <>
      <Bg></Bg>
      <SignUpPageSection>
        {/* 넓이 990px 박스 */}
        <SignUpPageBox>
          {/* 이미지 박스 */}
          <SignUpPageImageBox>
            <LogoBox>
              <img
                src={process.env.PUBLIC_URL + "/pngwing.png"}
                height="72px"
              />
              <span
                style={{
                  fontSize: "3rem",
                  color: "#424242",
                  textShadow: "0.5px 0.5px 1px 1px #CDCDCD",
                  fontWeight: "lighter",
                  margin: "8px 0 0",
                }}
              >
                <em>微道</em>
              </span>
            </LogoBox>
          </SignUpPageImageBox>

          {/* 회원가입 카드 */}
          <SignUpPageCard>
            <SignUpCardHeader>
              <span>Personal Account</span>
            </SignUpCardHeader>
            <SignUpCardBody>
              <SignUpInputForm />
              <Vl />
              <ToSignInBox />
            </SignUpCardBody>
          </SignUpPageCard>
          {/* 카피라이트 */}
          <CopywriteCard>
            <Copywrite
              string={
                "Beijing Weibo Internet Technology Co., Ltd. 京网文〔2020〕4754-886号 京ICP备12002058号-2"
              }
            />
            <Copywrite string={"Copyright © 2009-2022 WEIBO"} />
          </CopywriteCard>
        </SignUpPageBox>
      </SignUpPageSection>
    </>
  );
};
const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    100% 100% at 50.12% 0%,
    rgba(131, 187, 224, 0.83) 22.24%,
    #bee1f5 58.85%
  );
  z-index: -1;
`;

const SignUpPageSection = styled.div`
  display: flex;
  background: radial-gradient(
    100% 100% at 50.12% 0%,
    rgba(131, 187, 224, 0.83) 22.24%,
    #bee1f5 58.85%
  );
  width: 100vw;
  margin: 0 auto;
`;
const SignUpPageBox = styled(SignUpPageSection)`
  width: 990px;
  background: none;
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

const SignUpPageImageBox = styled(SignUpPageSection)`
  height: 185px;
  width: 100%;
  background: none;
  display: flex;
  justify-content: center;
  background-image: none;

  background: url("https://img.t.sinajs.cn/t5/style/images/register/bg_reg_wave.png?id=1370232467958")
    no-repeat center bottom;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 26px auto 0px;
`;

const SignUpPageCard = styled.div`
  width: 90%;
  min-width: 270px;
  margin: 0 auto;
  height: 454px;

  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px #cdcdcd;
  @media ${devices.mobileL} {
    height: 650px;
  }
`;
const CopywriteCard = styled.div`
  width: 90%;
  min-width: 270px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`;

const SignUpCardHeader = styled.div`
  width: 100%;
  height: 82px;

  display: flex;
  align-items: center;
  span {
    font-size: 1.5rem;
    margin-left: 40px;
    border-bottom: solid #ff8200;
  }
`;

const SignUpCardBody = styled.div`
  width: 100%;
  height: 372px;

  display: flex;
  justify-content: space-between;

  @media ${devices.mobileL} {
    flex-direction: column;
    height: 510px;
  }
`;

const Vl = styled.div`
  border-left: 1px solid #cdcdcd;
  height: 300px;
  border-radius: 1px;
  margin-top: 20px;
  @media ${devices.mobileL} {
    display: none;
  }
`;

export default SignUpPage;
