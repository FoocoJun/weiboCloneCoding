import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NumberButton = ({ number, string }) => {
  return (
    <>
      <NumberButtonAbsoluteBox>
        <div class="numdiv">
          <p>{number}</p>
        </div>
        <div class="stringdiv">
          <Link to={"/"} style={{ textDecoration: "none", color: "#0a8cd2" }}>
            {string}
          </Link>
        </div>
      </NumberButtonAbsoluteBox>
    </>
  );
};

const NumberButtonAbsoluteBox = styled.div`
display:flex;
margin: 10px 0;
  .stringdiv {
    white-space:normal;
    display: inline-block;
    font-size: 0.8rem;
    margin: 0px 7px;
    &:hover {
      text-decoration: underline;
    }
  }
  .numdiv {
    display: inline-block;
    width: 15px;
    background-image: url("https://img.t.sinajs.cn/t5/style/images/register/bg_listNum.png?id=1370232467958");
    background-repeat: no-repeat;
    p {
      width: 15px;
      display: flex;
      justify-content: center;
      position: relative;
      bottom: 3px;
      color: white;
      margin: 0;
      padding: 0;
    }
  }
`;

export default NumberButton;
