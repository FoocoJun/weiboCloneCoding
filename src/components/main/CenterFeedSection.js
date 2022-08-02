import React from "react";
import styled from "styled-components";
import { devices } from "../../device";
import { Routes, Route } from "react-router-dom";

import Feed from "../feeds/Feed";
import PostBox from "../PostBox";

const CenterFeedSection = () => {
  const tmpTmpPost = [
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
    {
      postid: 0,
      username: "송하준",
      profileimage:
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/33348141_2029080354019391_8693798106786955264_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JwId3zDFgcAAX-aqnGM&_nc_oc=AQnpYYjCh6tLBqEFJn4627NAbdmIKy8ki4c68pcef28aBu3b-we8cDSUgLLIPI6ISjw&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT9lA-24SlT05i3k53ixf-6Ow3AeT_R9sGCBzLFHmc6AsQ&oe=630BD836",
      date: "2小时前",
      images: [
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/102893638_2581742102086544_6593111894341743143_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AGf_uEXqtrkAX8W1udC&_nc_oc=AQmHPeum_qX_qW-oeADENqPGrMXXo2e70y1LxAebEABms3P_GPc6-s4nRVPj_3_r4L0&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_GCYebID7cxPW7CZW28Qru4gfX49BeW_aZ0j2TNuOQVg&oe=63098351",
        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/12801585_1666442426949854_6266308043066990054_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=xj0JddUXPbQAX8fk7nS&tn=80rR6QnwQZXm_AhZ&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_qVwuSmCmQfyFFG6EJV0vogDJHSXbyGbfSS-GR2WaXbQ&oe=630CDEFB",
      ],
      contents:
        "动真格了，村镇银行监管单位昨天查了三个，开封那个在开封新东方村镇银行15分钟放水事件中一定起了主导作用，或许就是他的关系大户，算账时间到了，一个都跑不了，吕奕胡作非为11年，背后的伞会被全部清理出来。",
      commentCount: 5,
      like: 16,
    },
    {
      postid: 1,
      username: "이범규",
      profileimage:
        "https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg",
      date: "4小时前",
      images: [
        "https://spartacodingclub.kr/css/images/online/web_plus/sec01_img02.jpg",
      ],
      contents: "每周100多个小时的强化训练！我们决定将业务扩展到中国。",
      commentCount: 762,
      like: 2267,
    },
  ];
  const [tmpPost, setTmpPost] = React.useState(tmpTmpPost);
  const obsRef = React.useRef(null);
  const preventRef = React.useRef(true); //옵저버 중복 실행 방지
  const [showMore, setShowMore] = React.useState(1);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setShowMore((prev) => prev + 1);
    }
  };
  const [filteredPost, setFilteredPost] = React.useState([]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const getMoreList = React.useCallback(() => {
    //글 불러오기
    setFilteredPost(tmpPost.filter((val, idx) => idx < 4 * showMore));
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
