import React from "react";
import styled from "styled-components";
import IconButton from "../buttons/IconButton";
import { devices } from "../../device";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderNavBar = () => {
  const [underBarCount, setUnderBarCount] = React.useState("Bar/center");
  const authorization = useSelector((state) => state.users.authorization);
  const TubeIconBoxRef = React.useRef(null);
  const MainIconBoxRef = React.useRef(null);
  const SendIconBoxRef = React.useRef(null);
  const navigate = useNavigate();

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
      <Header style={{ height: `${authorization && 60}px` }}>
        <NavBarDiv>
          <LeftSideBox>
            <img src={process.env.PUBLIC_URL + "/pngwing.png"} height="32px" />
            <em>微道</em>
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
            <FlexBox style={{ display: `${authorization && "none"}` }}>
              <SignInButton
                onClick={() => {
                  navigate("/signin");
                }}
              >
                로그인
              </SignInButton>
              <SignUpButton
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </SignUpButton>
              {authorization && <PostButton
                onClick={() => {
                  navigate("/post");
                  window.scrollTo(0, 0);
                }}
              >
                <PostIcon icon={faPenToSquare} color={"white"} size={"1x"} />
              </PostButton>}
            </FlexBox>
            <FlexBox
              style={{
                display: `${authorization ? "flex" : "none"}`,
                margin: `${authorization && 0}px`,
              }}
            >
              <AuthPostButton
                style={{ display: `${authorization && "inherit"}` }}
                onClick={() => {
                  navigate("/post");
                  window.scrollTo(0, 0);
                }}
              >
                <PostIcon icon={faPenToSquare} color={"white"} size={"1x"} />
              </AuthPostButton>
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
  z-index: 999;

  background-color: #fff;
  @media ${devices.mobileL} {
    height: 99px;
  }
`;

const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 20px;
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;

const LeftSideBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 22.5%;
  @media ${devices.laptop} {
    display: none;
  }
  em {
    font-size: 1.5rem;
    font-weight: bolder;
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
  @media ${devices.mobileL} {
    width: 100%;
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
  width: 27.9%;
  @media ${devices.laptop} {
    width: 50%;
  }
  @media ${devices.mobileL} {
    width: 100%;
    justify-content: center;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  margin: 1rem 0;
  @media ${devices.laptop} {
    justify-content: end;
  }
  @media ${devices.mobileL} {
    width: 100%;
    margin: 10px 0 0;
    justify-content: center;
  }
`;

const NavBarButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  height: 30px;
  width: 60px;
  border-radius: 15px;
  margin: 0px 5px;

  text-align: center;
  line-height: 30px;

  cursor: pointer;
`;

const SignInButton = styled(NavBarButton)`
  font-size: 14px;

  background: #ff8200;
  color: #fff;
`;
const SignUpButton = styled(NavBarButton)`
  font-size: 14px;

  background: #fff;
  color: #cdcdcd;
`;

const PostButton = styled(NavBarButton)`
  width: 30px;

  background: #ff8200;
  color: #fff;

  background: linear-gradient(180deg, #f87c45, #f36126);
  @media ${devices.mobileL} {
    position: fixed;
    right: 20px;
    bottom: 20px;
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  }
`;

const AuthPostButton = styled(PostButton)`
  display: none;
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
