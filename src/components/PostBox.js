import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ColumnFlexDiv, RowFlexDiv } from "../styled";
import { devices } from "../device";

const PostBox = () => {
  const [postUploadImg, setPostUploadImg] = React.useState([]);
  const [img, setImg] = React.useState(""); //이미지 미리보기
  const [imgs, setImgs] = React.useState([]); //이미지들 미리보기
  const AttentionRef = React.useRef();
  const imagePreviewNameRef = React.useRef();

  const [postCurrentLength, setPostCurrentLength] = React.useState(11); //이미지들 미리보기

  const checkPictureCorrect = (e) => {
    AttentionRef.current.innerText = null;
    imagePreviewNameRef.current.innerText = null;
    setPostUploadImg(null);
    setImg(null);

    const correctForm = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
    if (e.target.files[0]?.size > 3 * 1024 * 1024) {
      AttentionRef.current.innerText = "파일 사이즈는 3MB까지만 가능합니다.";
      return;
    } else if (!e.target?.files[0]?.name.match(correctForm)) {
      AttentionRef.current.innerText = "이미지 파일만 업로드 가능합니다.";
      return;
    }

    let array = Array.from(e.target.files);
    let copyPreview = [...array];
    setPostUploadImg(copyPreview); //업로드 원본 파일'들' state : 추후 게시글 다중 업로드
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

  return (
    <form>
      <PostBoxCard>
        <PostBoxHeader>有什么新鲜事想告诉大家？</PostBoxHeader>
        <PostBoxBody>
          <div>
            己输入<em>{postCurrentLength}</em>字
          </div>
          <PostBoxTextArea
            placeholder="Your content"
            onChange={(e) => setPostCurrentLength(e.target.value.length)}
          ></PostBoxTextArea>
        </PostBoxBody>
        <PostBoxFooter>
          <label htmlFor="postImage">
            <FontAwesomeIcon icon={faImage} size={"xl"} />
            <img src={img} />
            <div ref={imagePreviewNameRef}></div>
            <span ref={AttentionRef}></span>
          </label>
          <input
            id="postImage"
            type={"file"}
            accept={"image/*"}
            onChange={checkPictureCorrect}
          />
          <button>올리기</button>
        </PostBoxFooter>
      </PostBoxCard>
    </form>
  );
};

const PostBoxCard = styled(ColumnFlexDiv)`
  background-color: white;
  margin: 0px 0px 10px;
  border-top: solid #ff8200;
  padding: 10px 20px 0 20px;
  border-radius: 4px 4px 0 0;
`;

const PostBoxHeader = styled(RowFlexDiv)`
  font-weight: bolder;
  padding-bottom: 10px;
  border-bottom: 1px solid #cdcdcd;
`;

const PostBoxBody = styled(ColumnFlexDiv)`
  div {
    color: grey;
    text-align: right;
    em {
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
`;

const PostBoxTextArea = styled.textarea`
  resize: none;
  box-shadow: 0px 0px 4px grey inset;
  border: green;
  height: 100px;
  &:focus {
    outline: none;
  }
`;

const PostBoxFooter = styled(RowFlexDiv)`
  justify-content: space-between;
  margin: 5px 0;
  align-items: center;
  label {
    display: flex;

    color: #84c002;
    cursor: pointer;
    &:hover {
      color: green;
    }

    img {
      margin-left: 5px;
      width: 24px;
    }

    div {
      margin-left: 5px;
      @media ${devices.mobileL} {
        width: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    span {
      margin-left: 5px;
      color: red;
      @media ${devices.mobileL} {
        display: none;
      }
    }
  }

  button {
    font-size: 14px;

    background: #ff8200;
    color: #fff;
    border: none;
    padding: 7px 20px;
    border-radius: 2px;
    @media ${devices.mobileL} {
      padding: 3px;
    }
  }

  #postImage {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export default PostBox;
