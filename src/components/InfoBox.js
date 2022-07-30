import React from "react";
import styled from "styled-components";
import { devices } from "../device";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHeadset,
  faCircleExclamation,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const InfoBox = () => {
  return (
    <div>
      <FirstFooter>
        <Icon
          icon={faHeadset}
          style={{
            margin: "13px 6px 0px 0px",
          }}
        />
        <p>帮助中心</p>
      </FirstFooter>
      <FirstUtility>
        <div
          style={{
            marginLeft: "17px",
          }}
        >
          微博客服 4000-960-960
        </div>
        <div
          style={{
            margin: "0px 29px 0px 29px",
          }}
        >
          自助服务中心
        </div>
        <div>常见问题</div>
      </FirstUtility>

      <SecondFooter>
        <Icon
          icon={faHeart}
          style={{
            margin: "13px 6px 0px 0px",
          }}
        />
        <p>合作&服务 </p>
      </SecondFooter>
      <SecondUtility>
        <div
          style={{
            marginLeft: "17px",
          }}
        >
          微博营销
        </div>
        <div
          style={{
            margin: "0px 19px 0px 19px",
          }}
        >
          合作热线 4000-980-980
        </div>
        <div
          style={{
            margin: "0px 19px 0px 0px",
          }}
        >
          开放平台
        </div>
        <div>更多</div>
      </SecondUtility>

      <ThirdFooter>
        <Icon
          icon={faCircleExclamation}
          style={{
            margin: "13px 6px 0px 0px",
          }}
        />
        <p>举报中心 </p>
      </ThirdFooter>
      <ThirdUtility>
        <div
          style={{
            marginLeft: "17px",
          }}
        >
          违规投诉 010-60618076
        </div>
        <div
          style={{
            margin: "0px 18px 0px 19px",
          }}
        >
          处理大厅
        </div>
        <div
          style={{
            margin: "0px 19px 0px 0px",
          }}
        >
          舞弊举报
        </div>
        <div>更多</div>
      </ThirdUtility>

      <ForthFooter>
        <Icon
          icon={faCircleUser}
          style={{
            margin: "13px 6px 0px 0px",
          }}
        />
        <p>关于微博 </p>
      </ForthFooter>
      <ForthUtility>
        <div
          style={{
            marginLeft: "17px",
          }}
        >
          About Weibo
        </div>
        <div
          style={{
            margin: "0px 18px 0px 18px",
          }}
        >
          客户端下载
        </div>
        <div
          style={{
            margin: "0px 18px 0px 0px",
          }}
        >
          微博招聘
        </div>
        <div>网站备案信息</div>
      </ForthUtility>
      <FifthFooter>
        <img
          src={process.env.PUBLIC_URL + "/pngwing.png"}
          height="15px"
          style={{
            margin: "25px 5px 0px 16px",
          }}
        />
        <div
          style={{
            margin: "25px 0px 0px 3px",
            fontSize: "3px",
          }}
        >
          Copyright © 2009-2022 营业执照
        </div>

        <img
          src="https://a.sinaimg.cn/mintra/pic/2201190827/32aria.png"
          style={{
            width: "68px",
            height: "35px",
            border: "2px solid lightgray",
            margin: "13px 0px 0px 17px",
          }}
        />
      </FifthFooter>
    </div>
  );
};

const FirstFooter = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  line-height: 15px;

  color: #606060;
`;

const FirstUtility = styled.p`
  display: flex;
  flex-direction: row;
  color: #939393;
  font-size: 10px;
  line-height: 6px;
`;

const SecondFooter = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  line-height: 15px;
  color: #606060;
`;

const SecondUtility = styled.p`
  display: flex;
  flex-direction: row;
  color: #939393;
  font-size: 10px;
  line-height: 6px;
`;

const ThirdFooter = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  line-height: 15px;
  color: #606060;
`;

const ThirdUtility = styled.p`
  display: flex;
  flex-direction: row;
  color: #939393;
  font-size: 10px;
  line-height: 6px;
`;

const ForthFooter = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  line-height: 15px;
  color: #606060;
`;

const ForthUtility = styled.p`
  display: flex;
  flex-direction: row;
  color: #939393;
  font-size: 10px;
  line-height: 6px;
`;

const FifthFooter = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  line-height: 15px;
  color: #606060;
`;

const Icon = styled(FontAwesomeIcon)``;
export default InfoBox;
