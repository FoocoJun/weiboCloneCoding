import React from "react";
import styled from "styled-components";
import SignUpInputForm from "../SignUpInputForm";
import ToSignInBox from "../ToSignInBox";

const SignUpPage = () => {
  return (
    <SignUpPageSection>
      {/* 넓이 990px 박스 */}
      <SignUpPageBox>
        {/* 이미지 박스 */}
        <SignUpPageImageBox>
          <LogoBox>
            <img src={process.env.PUBLIC_URL + "/pngwing.png"} height="72px" />
            <span
              style={{
                fontSize: "3rem",
                color: "#424242",
                textShadow: "0.5px 0.5px 1px 1px #CDCDCD",
                fontWeight: "lighter",
                margin: "8px 0 0",
              }}
            >
              <em>微博</em>
            </span>
          </LogoBox>
        </SignUpPageImageBox>

        {/* 회원가입 카드 */}
        <SignUpPageCard>
          <SignUpCardHeader>
            <span>Personal Account</span>
          </SignUpCardHeader>
          <SignUpCardBody>
          <SignUpInputForm/>
          <ToSignInBox/>
          </SignUpCardBody>
        </SignUpPageCard>
      </SignUpPageBox>
    </SignUpPageSection>
  );
};

const SignUpPageSection = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: radial-gradient(
    100% 100% at 50.12% 0%,
    rgba(131, 187, 224, 0.83) 22.24%,
    #bee1f5 58.85%
  );
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
`

export default SignUpPage;
