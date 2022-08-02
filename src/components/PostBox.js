import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ColumnFlexDiv, RowFlexDiv } from "../styled";
import { devices } from "../device";

const PostBox = () => {
  const [postUploadImg, setPostUploadImg] = React.useState([]);
  const [img, setImg] = React.useState(""); //이미지 미리보기
  let [imgs, setImgs] = React.useState([]); //이미지들 미리보기
  const attentionRef = React.useRef(null);
  const imagePreviewNameRef = React.useRef(null);

  const postContentsRef = React.useRef();

  const [postCurrentLength, setPostCurrentLength] = React.useState(11); //현재 글자 수

  const checkPictureCorrect = (e) => {
    imagePreviewNameRef.current.style.width = "150px";
    attentionRef.current.style.width = "150px";
    if (window.innerWidth < 500) {
      imagePreviewNameRef.current.style.width = "90px";
      attentionRef.current.style.width = "90px";
    }
    attentionRef.current.innerText = null;
    imagePreviewNameRef.current.innerText = null;
    setPostUploadImg(null);
    setImg(null);
    //흠.... setter함수를 2회 이상 사용시 한번에 모아 처리하느라 예상과 달라짐.
    imgs = [];

    const correctForm = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
    //단일 파일 체크 후
    if (e.target.files[0]?.size > 3 * 1024 * 1024) {
      imagePreviewNameRef.current.style.width = "0px";
      attentionRef.current.innerText = "파일 사이즈는 3MB까지만 가능합니다.";
      setImgs([]);
      return;
    } else if (!e.target?.files[0]) {
      imagePreviewNameRef.current.style.width = "0px";
      attentionRef.current.innerText = "";
      setImgs([]);
      return;
    } else if (!e.target?.files[0]?.name.match(correctForm)) {
      imagePreviewNameRef.current.style.width = "0px";
      attentionRef.current.innerText = "이미지 파일만 업로드 가능합니다.";
      setImgs([]);
      return;
    }
    //다중파일 중 섞여있을 때 체크
    for (let i = 0; i < e.target.files.length; i++) {
      if (i == 3) {
        imagePreviewNameRef.current.style.width = "0px";
        attentionRef.current.innerText = "3장만. 돈없어요.";
        setImgs([]);
        return;
      } else if (e.target.files[i]?.size > 3 * 1024 * 1024) {
        imagePreviewNameRef.current.style.width = "0px";
        attentionRef.current.innerText = "파일 사이즈는 3MB까지만 가능합니다.";
        setImgs([]);
        return;
      } else if (!e.target?.files[i]) {
        imagePreviewNameRef.current.style.width = "0px";
        attentionRef.current.innerText = "";
        setImgs([]);
        return;
      } else if (!e.target?.files[i]?.name.match(correctForm)) {
        imagePreviewNameRef.current.style.width = "0px";
        attentionRef.current.innerText = "이미지 파일만 업로드 가능합니다.";
        setImgs([]);
        return;
      }
    }
    attentionRef.current.style.width = "0px";

    let array = Array.from(e.target.files);
    let copyPreview = [...array];
    setPostUploadImg(copyPreview); //업로드 원본 파일'들' state : 추후 게시글 다중 업로드
    imagePreviewNameRef.current.innerText = copyPreview[0].name;

    for (let i = 0; i < array.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(array[i]);
      reader.onload = (e) => {
        setImg(e.target.result); //미리보기 이미지 state

        //여러 사진의 DataURL 결과물들을 imgs state에 담음
        imgs.push(e.target.result);
      };
    }
    setImgs(imgs);
  };
  console.log(imgs)


  // 서브밋 함수
  const submitToPost = (e) => {
    e.preventDefault();
    let tmpPostData = {
      contents: postContentsRef.current.value,
      image: postUploadImg,
    };
    console.log(tmpPostData);
  };

  return (
    <form onSubmit={submitToPost}>
      <PostBoxCard>
        <PostBoxHeader>有什么新鲜事想告诉大家？</PostBoxHeader>
        <PostBoxBody>
          <div>
            己输入<em>{postCurrentLength}</em>字
          </div>
          <PostBoxTextArea
            placeholder="Your content"
            ref={postContentsRef}
            onChange={(e) => setPostCurrentLength(e.target.value.length)}
          ></PostBoxTextArea>
        </PostBoxBody>
        <PostBoxFooter>
          <label htmlFor="postImage">
            <FontAwesomeIcon icon={faImage} size={"xl"} />
            {imgs &&
              imgs.map((val, idx) => {
                return <img key={"PostBoxFooterImg" + idx} src={val} />;
              })}
            <div ref={imagePreviewNameRef}></div>
            <span ref={attentionRef}></span>
          </label>
          <input
            id="postImage"
            type={"file"}
            accept={"image/*"}
            onChange={checkPictureCorrect}
            max={"3"}
            multiple
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
    @media ${devices.mobileL} {
      width: 100%;
      justify-content: flex-start;
    }

    color: #84c002;
    cursor: pointer;
    &:hover {
      color: green;
    }

    img {
      margin-left: 5px;
      width: 24px;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    div {
      margin-left: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media ${devices.mobileL} {
        width: 0px;
      }
    }
    span {
      color: red;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media ${devices.mobileL} {
        width: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
      margin: 5px;
      width: 100%;
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
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

export default PostBox;
