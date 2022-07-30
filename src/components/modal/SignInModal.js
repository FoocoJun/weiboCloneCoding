import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock} from "@fortawesome/free-solid-svg-icons";

const SignInModal = () => {
  return (
    <Box>
      <LogIn>
        <div className="Idbox"
        style={{
          width: "25vw",
          height: "4vh",
          border: "1px solid lightgray",
          display: "flex",
          flexDirection: "row"
        }}>
          <Icon
          icon={faUser}
          style={{
            margin: "11px 0px 0px 15px"
          }}/>

          <input type="text" 
          placeholder= "ID"
          style={{
            width: "21vw",
            height: "2vh",
            margin: "9px 0px 0px 10px",
            border: "none"
          }}
          />
        </div>

        <div className="Pwbox"
        style={{
          width: "25vw",
          height: "4vh",
          border: "1px solid lightgray",
          display: "flex",
          flexDirection: "row",
          marginTop: "15px"
        }}>
          <Icon
          icon={faLock}
          style={{
            margin: "11px 0px 0px 15px"
          }}/>

          <input type="text" 
          placeholder="PW"
          style={{
            width: "21vw",
            height: "2vh",
            margin: "9px 0px 0px 10px",
            border: "none"
          }}
          />
        </div>

        <button style={{
          width: "25vw",
          height: "4vh",
          marginTop: "15px",
          backgroundColor: "#f36126",
          border: "none",
          borderRadius: "2px"
        }}>로그인</button>
      </LogIn>



    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
  width: 35vw;
  border: 2px solid lightgray;
  box-shadow: 0px 0px 30px lightgray;

`;

const LogIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 30vw;
  background-color: #fff;
  border: 1px solid lightgray;
`;

const Icon = styled(FontAwesomeIcon)`
`;
export default SignInModal;
