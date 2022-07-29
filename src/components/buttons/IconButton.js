import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const IconButton = ({ string, iconName, to, size, color }) => {
  const navigate = useNavigate();
  const [usingIcon, setUsingIcon] = React.useState(null);

  React.useEffect(() => {
    const callImport = async () => {
      let fontawesomeIcon = await import(`@fortawesome/free-solid-svg-icons`);
      setUsingIcon(fontawesomeIcon[iconName]);
    };
    callImport();
  }, []);

  return (
    <>
      {/* icon을 불러온 이후에만 띄워준다. */}
      {usingIcon && to && (
        <IconHoverBox
          onClick={() => {
            navigate(to);
            window.scrollTo({
              top: 100,
              left: 100,
              behavior: "smooth",
            });
          }}
        >
          <FontAwesomeIcon icon={usingIcon} size={size ? size : "1x"} />
          {string}
        </IconHoverBox>
      )}
    </>
  );
  // 사용법
  // <IconButton string={"회원가입"} iconName={"faHome"} to={"/"} size={"1x"} color={"#fff"} />;
};

const IconHoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 38px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    color: #ff8200;
  }
`;

export default IconButton;
