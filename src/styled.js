import styled from "styled-components";

export const ColumnFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

// 모달창
// 사용법
// <ModalBg onClick={()=>{navigate('/배경')}}/>
// <ModalBody>내용</ModalBody>
export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: block;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;

  width: fit-content;
  height: fit-content;

  padding: 5px;

  text-align: center;

  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);

  transform: translateX(-50%) translateY(-50%);
`;
