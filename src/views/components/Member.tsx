import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import Th22 from "../images/Member/22th.jpg";
import Th23 from "../images/Member/23th.jpg";
import ReactVivus from "react-vivus";
import svg1 from "../images/Member/footertext.svg";
import Header from "../BaseWrapper/Header";
import Footer from "../BaseWrapper/Footer";

const Member: React.FC = props => {
  const gotoGeneration22th = () => {
    history.push("/generation/22th");
  };
  const gotoGeneration23th = () => {
    history.push("/generation/23th");
  };
  return (
    <>
      <Header />
      <Screen>
        <Title>
          Member
        </Title>
        <TitleText>
          主に横国、フェリス、東洋英和<br></br>のメンバーで活動しています。
        </TitleText>
        <Member22th>
          <Text>22th</Text>
          <ImageBox>
            <Image src={Th22} onClick={gotoGeneration22th} />
            <Button></Button>
            <Arrow></Arrow>
            <Arrow1></Arrow1>
          </ImageBox>
        </Member22th>
        <Member23th>
          <Text>23th</Text>
          <ImageBox>
            <Image src={Th23} onClick={gotoGeneration23th} />
            <Button></Button>
            <Arrow></Arrow>
            <Arrow1></Arrow1>
          </ImageBox>
        </Member23th>

        <FooterText>
          <ReactVivus
            id=" foo "
            option={{
              file: svg1,
              type: "scenario-sync",
              duration: 50,
              animTimingFunction: " EASE "
            }}
            style={{ width: " 100%", position: "absolute", top: "" }}
          />
          <Content>
            僕たちは22th(3年生)15人、23th(2年生)15人で<br></br>
            活動しています。写真をタップして一人一人の<br></br>
            自己紹介を覗いてみてください。
          </Content>
        </FooterText>
      </Screen>
      <Footer />
    </>
  );
};

const Screen = styled.div`
  height: 130vh;
  width: 100%;
  background-color: #faf8f5;
  align-items: center;
  justify-content: center;
  font-family: ヒラギノ明朝 ProN;
`;

const Title = styled.h1`
  position:absolute;
  top:40px;
  left:5%;
  right:5%;
  text-align: center;
  font-family: "Savoye LET", consive;
  color: #030F8F;
  font-size: 80px;
  font-weight: lighter;
`;
const TitleText = styled.div`
  position: absolute;
  font-family: ヒラギノ明朝 ProN;
  top: 23vh;
  padding: 0;
  left: 10%;
  right: 10%;
  color: #000;
  text-align: center;
  font-size: 15px;
`;

const Member22th = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  right: 5%;
  height: 35vh;
  padding: 0;
  margin: 0 auto;
  top: 32vh;
`;
const Member23th = styled.div`
  position: absolute;
  width: 90%;
  left: 5%;
  right: 5%;
  height: 35vh;
  padding: 0;
  margin: 0 auto;
  top: 75vh;
`;
const Text = styled.div`
  font-size: 25px;
  text-decoration: underline;
`;
const ImageBox = styled.div`
  position: absolute;
  width: 100%;
  height: 85%;
  bottom: 0;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const Button = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 50px;
  width: 50px;
  background-color: #ffd217;
  opacity: 0.65;
  border-radius: 50px 0 0 0;
  font-family: "Open Sans", sans-serif;
`;
const Arrow = styled.div`
  position: absolute;
  bottom: 12px;
  right: 20px;
  width: 8px;
  height: 8px;
  border: 3px solid;
  border-color: #fff #fff transparent transparent;
  transform: rotate(45deg);
  opacity: 1;
`;
const Arrow1 = styled.div`
  position: absolute;
  bottom: 12px;
  right: 10px;
  width: 8px;
  height: 8px;
  border: 3px solid;
  border-color: #fff #fff transparent transparent;
  transform: rotate(45deg);
  opacity: 1;
`;
const FooterText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 15px;
  paddingfont-family: ヒラギノ明朝 ProN;
  top: 113vh;
  width: 90%;
  left: 5%;
  right: 5%;
  // background-color:#ddd;
  height: 12vh;
`;
const Content = styled.div`
  margin-top: 1.5vh;
`;

export default Member;
