import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      {usingIcon && (
        <div>
          <FontAwesomeIcon
            icon={usingIcon}
            size={size ? size : "1x"}
            onClick={() => {
              navigate(to);
            }}
            color={color ? color : "black"}
          />
          {string}
        </div>
      )}
    </>
  );
  // 사용법
  // <IconButton string={"회원가입"} iconName={"faHome"} to={"/"} size={"1x"} color={"#fff"} />;
};

export default IconButton;

