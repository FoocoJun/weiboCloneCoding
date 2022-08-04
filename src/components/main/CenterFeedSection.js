import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { Routes, Route } from "react-router-dom";

import Feed from "../feeds/Feed";
import PostBox from "../PostBox";
import axios from "axios";

const CenterFeedSection = () => {
  const [tmpPost, setTmpPost] = React.useState([]);
  const obsRef = React.useRef(null);
  const preventRef = React.useRef(true); //옵저버 중복 실행 방지
  const [showMore, setShowMore] = React.useState(0);
  const [filteredPost, setFilteredPost] = React.useState([]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setShowMore((prev) => prev + 1);
    }
  };
  console.log(showMore)

  React.useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.1 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const getMoreList = React.useCallback(() => {
    axios
      .get(process.env.REACT_APP_DB_HOST + "/api/posts", {
        params: { page: showMore, sortby: "id" },
      })
      .then((Response) => {
        setFilteredPost([...filteredPost, ...Response.data]);
        console.log(filteredPost);
      })
      .catch((err) => {
        console.log(err);
      });
    //글 불러오기
  }, [showMore]);

  React.useEffect(() => {
    preventRef.current = true;
    getMoreList();
    // 읽어오기
  }, [showMore]);

  return (
    <Box>
      <Routes>
        <Route path="/post" element={<PostBox />} />
      </Routes>
      {filteredPost.map((val, idx) => {
        return <Feed key={"BoxFeed" + idx} tmpPost={val} />;
      })}
      <Observer ref={obsRef}></Observer>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  margin: 0 10px;
  @media ${devices.laptop} {
    width: 100%;
  }
  @media (max-height: 500px) {
    width: 100%;
  }
`;
const Observer = styled.div`
  height: 0px;
`;

export default CenterFeedSection;
