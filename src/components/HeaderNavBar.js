import React from "react";
import styled from "styled-components";
import IconButton from "./buttons/IconButton";
import { devices } from "../device";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const HeaderNavBar = () => {
  const [underBarCount, setUnderBarCount] = React.useState("Bar/center");
  const TubeIconBoxRef = React.useRef(null);
  const MainIconBoxRef = React.useRef(null);
  const SendIconBoxRef = React.useRef(null);

  React.useEffect(() => {
    //부끄럽다. 알고리즘 공부하자..
    switch (underBarCount) {
      case "left": {
        TubeIconBoxRef.current.style.borderBottom = "solid";
        TubeIconBoxRef.current.style.borderColor = "#ff8200";
        TubeIconBoxRef.current.style.color = "#ff8200";
        MainIconBoxRef.current.style.borderBottom = "none";
        MainIconBoxRef.current.style.borderColor = "#fff";
        MainIconBoxRef.current.style.color = "black";
        SendIconBoxRef.current.style.borderBottom = "none";
        SendIconBoxRef.current.style.borderColor = "#fff";
        SendIconBoxRef.current.style.color = "black";
        break;
      }
      case "right": {
        TubeIconBoxRef.current.style.borderBottom = "none";
        TubeIconBoxRef.current.style.borderColor = "#fff";
        TubeIconBoxRef.current.style.color = "black";
        MainIconBoxRef.current.style.borderBottom = "none";
        MainIconBoxRef.current.style.borderColor = "#fff";
        MainIconBoxRef.current.style.color = "black";
        SendIconBoxRef.current.style.borderBottom = "solid";
        SendIconBoxRef.current.style.borderColor = "#ff8200";
        SendIconBoxRef.current.style.color = "#ff8200";
        break;
      }
      default: {
        TubeIconBoxRef.current.style.borderBottom = "none";
        TubeIconBoxRef.current.style.borderColor = "#fff";
        TubeIconBoxRef.current.style.color = "black";
        MainIconBoxRef.current.style.borderBottom = "solid";
        MainIconBoxRef.current.style.borderColor = "#ff8200";
        MainIconBoxRef.current.style.color = "#ff8200";
        SendIconBoxRef.current.style.borderBottom = "none";
        SendIconBoxRef.current.style.borderColor = "#fff";
        SendIconBoxRef.current.style.color = "black";
        break;
      }
    }
  }, [underBarCount]);

  return (
    <>
      <Header>
        <NavBarDiv>
          <LeftSideBox>
            <img src={process.env.PUBLIC_URL + "/pngwing.png"} height="32px" />
            <h3>웨이보</h3>
          </LeftSideBox>
          <CenterBox>
            <HeightBox
              ref={TubeIconBoxRef}
              onClick={() => {
                setUnderBarCount("left");
              }}
            >
              <IconButton iconName={"faTv"} to={"/"} size={"lg"} />
            </HeightBox>
            <HeightBox
              ref={MainIconBoxRef}
              onClick={() => {
                setUnderBarCount("center");
              }}
            >
              <IconButton iconName={"faFire"} to={"/"} size={"lg"} />
            </HeightBox>
            <HeightBox
              ref={SendIconBoxRef}
              onClick={() => {
                setUnderBarCount("right");
              }}
            >
              <IconButton iconName={"faPaperPlane"} to={"/"} size={"xl"} />
            </HeightBox>
          </CenterBox>
          <RightSideBox>
            <FlexBox>
              <SignInButton>로그인</SignInButton>
              <SignUpButton>회원가입</SignUpButton>
              <PostButton>
                <PostIcon icon={faPenToSquare} color={"white"} size={"1x"} />
              </PostButton>
            </FlexBox>
          </RightSideBox>
        </NavBarDiv>
      </Header>
    </>
  );
};

const Header = styled.section`
  position: sticky;
  top: 0px;
  height: 60px;

  background-color: #fff;
`;

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 20px;
`;

const LeftSideBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 25%;
  @media ${devices.laptop} {
    display: none;
  }
`;

const CenterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  @media ${devices.laptop} {
    width: 50%;
  }
`;

const HeightBox = styled.div`
  display: flex;
  align-items: center;
  height: 57px;
`;

const RightSideBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 25%;
  @media ${devices.laptop} {
    width: 50%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  margin: 1rem 0;
`;

const SignInButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  margin: 0px 5px;

  text-align: center;
  line-height: 30px;
  font-size: 14px;

  background: #ff8200;
  color: #fff;

  cursor: pointer;
`;
const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  margin: 0px 5px;

  text-align: center;
  line-height: 30px;
  font-size: 14px;

  background: #fff;
  color: #cdcdcd;

  cursor: pointer;
`;

const PostButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 0px 5px;

  background: #ff8200;
  color: #fff;

  cursor: pointer;

  background: linear-gradient(180deg, #f87c45, #f36126);
`;
const PostIcon = styled(FontAwesomeIcon)`
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 15px;
  margin: auto auto 8px 8px;

  text-align: center;

  background: #ff8200;
  color: #fff;

  cursor: pointer;

  background: linear-gradient(180deg, #f87c45, #f36126);
`;
export default HeaderNavBar;
