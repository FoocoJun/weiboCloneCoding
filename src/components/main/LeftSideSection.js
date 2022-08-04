import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { devices } from "../../device";
import IconButton from "../buttons/IconButton";
import { keepFilterData } from "../../redux/modules/filters";

const LeftSideSection = () => {
  const scrollPosition = useSelector((state) => state.clutters.scrollPosition);
  // console.log(scrollPosition);
  const [leftBarCount, setLeftBarCount] = React.useState("id");
  const MainIconBoxRef = React.useRef(null);
  const TimeIconBoxRef = React.useRef(null);
  const dispatch = useDispatch();
  let sessionStorage = window.sessionStorage;

  React.useEffect(() => {
    //부끄럽다. 알고리즘 공부하자..
    dispatch(keepFilterData(leftBarCount));
    switch (leftBarCount) {
      case "content": {
        MainIconBoxRef.current.style.color = "black";
        TimeIconBoxRef.current.style.color = "#ff8200";
        break;
      }
      default: {
        MainIconBoxRef.current.style.color = "#ff8200";
        TimeIconBoxRef.current.style.color = "black";
        break;
      }
    }
  }, [leftBarCount]);

  React.useEffect(() => {
    sessionStorage.setItem("leftBar", leftBarCount);
  }, [leftBarCount]);

  return (
    <Box
      style={{ backgroundColor: `${scrollPosition < 60 ? "#fff" : "#f5f5f5"}` }}
    >
      <FlexBox style={{ display: `${scrollPosition < 60 ? "flex" : "none"}` }}>
        <div
          ref={MainIconBoxRef}
          onClick={() => {
            setLeftBarCount("id");
          }}
        >
          <IconButton
            iconName={"faFire"}
            to={"/"}
            size={"lg"}
            string={"热门微博"}
            width={"100%"}
            margin={"20px"}
          />
        </div>
        <div
          ref={TimeIconBoxRef}
          onClick={() => {
            setLeftBarCount("content");
          }}
        >
          <IconButton
            iconName={"faClock"}
            to={"/"}
            size={"lg"}
            string={"热门榜单"}
            width={"100%"}
            margin={"20px"}
          />
        </div>
      </FlexBox>
    </Box>
  );
};

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 5px 0;
  width: 100%;
  font-size: 0.82rem;
`;

const Box = styled.div`
  display: flex;
  position: sticky;
  top: 61px;

  width: 182px;
  height: 100vh;
  border-radius: 4px 0 0 4px;
  background-color: #fff;

  @media ${devices.mobileL} {
    display: none;
  }
  @media (max-height: 500px) {
    display: none;
  }
`;

export default LeftSideSection;
