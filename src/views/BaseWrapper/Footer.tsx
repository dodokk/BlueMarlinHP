import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import TwitterIcon from "../images/twitter.png";
import InstagramIcon from "../images/instagram.png";
import LineIcon from "../images/line.png";

const Footer: React.FC = props => {
  return (
    <>
      {
        <Screen>
          <Contact>
            <ContactText>お問い合わせ</ContactText>
            <Sinkan>只今、新歓の申込みを受け付けております。</Sinkan>
            <Sns>
              <Twitter>
                <a href="https://mobile.twitter.com/bluemarlin1996">
                  <Icon src={TwitterIcon}></Icon>
                </a>
              </Twitter>
              <Instagram>
                <a href="https://www.instagram.com/bluemarlin2020/?hl=ja">
                  <Icon src={InstagramIcon}></Icon>
                </a>
              </Instagram>
              <Line>
                <a href="https://lin.ee/rvBRrW4">
                  <Icon src={LineIcon}></Icon>
                </a>
              </Line>
            </Sns>
          </Contact>
        </Screen>
      }
    </>
  );
};

// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `

const Screen = styled.div`
  height: 170px;
  width: 100%;
  position: absolute;
  margin-top: auto;
  font-family: ヒラギノ明朝 ProN;
  text-align: center;
  background-color: #faf8f5;
  
`;
const Contact = styled.div`
  height: 120px;
  width: 90%;
  border-top: solid 1px #707070;
  position: absolute;
  left: 15px;
  margin-top: 15px;
  padding-top:15px;
  font-family: ヒラギノ明朝 ProN;
  text-align: center;
  background-color:#FAF8F5

`;
const ContactText = styled.div`
  position:absolute;
  height: 16px;
  width: 40%;
  font-size: 13px;
  border-bottom: solid 1px #707070;
  left:30%;
  right:30%;  
`;
const Sinkan = styled.div`
  margin-top: 20px;
  font-size: 11px;
  
`;
const Sns = styled.div`
  height: 80px;
  width: 80%;
  margin: 0 auto;
  // background-color:#ddd;
  position: relative;
  margin-top: 20px;
`;
const Twitter = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0px;
`;
const Instagram = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
`;
const Line = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  top: 0px;
`;
const Icon = styled.img`
  max-width: 100%;
  height: auto;
  width/***/: auto;
  opacity: 0.7;
  
`;

export default Footer;
