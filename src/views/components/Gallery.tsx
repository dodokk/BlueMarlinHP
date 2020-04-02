import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import Iframe from 'react-iframe';
import Header from "../BaseWrapper/Header";
import Footer from "../BaseWrapper/Footer";
import Photo1 from "../images/Gallery/photo1.jpg";
import Photo2 from "../images/Gallery/photo2.jpg";
import Photo3 from "../images/Gallery/photo3.jpg";
import Photo4 from "../images/Gallery/photo4.jpg";
import Photo5 from "../images/Gallery/photo5.jpg";
import Photo6 from "../images/Gallery/photo6.jpg";
import ReactVivus from "react-vivus";
import svg1 from "../images/Member/footertext.svg";




import Header from "../BaseWrapper/Header";
import Footer from "../BaseWrapper/Footer";

const Gallery: React.FC = props => {
  // コンポーネントが状態を持つときは↓を使う
  // const [状態変数, 状態変数を変更する関数] = useState(初期値);
  // const [samplestate, setSamplestate] = useState("initial");

  // ページ遷移するときは↓を使う
  // const goto〇〇 = () => {
  //   history.push("/{移動したいpath}")
  // };

  return (
<<<<<<< HEAD
  <>
  <Header />
      <Screen>
        <Title>Gallery</Title>
        <TitleText>
          ブルマリの写真や動画<br></br>
          一部紹介します。
        </TitleText>
        <Movie>
          <Text>Movie</Text>
          <Movie2019>
            2019年　新歓動画
            <Iframe url="https://player.vimeo.com/video/330928149"
              width="320"
              height="180"
              className="myClassname"
            />
          </Movie2019>
          <Movie2018>
            2018年　新歓動画
            <Iframe url="https://player.vimeo.com/video/265123888"
              width="320"
              height="180"
              className="myClassname"
              />
          </Movie2018>
          
        </Movie>
        <Photos>
            <Text style={{ marginBottom:'30px' }}>Photo</Text >
            <Photo src={Photo1} style={{  width:'40%' }}/>
            <Photo src={Photo2} style={{  width:'57%' }}/>
            <Photo src={Photo3} style={{  width:'40%', marginTop:'-41px'}}/>
            <Photo src={Photo4} style={{  width:'57%' }}/>
            <Photo src={Photo5} style={{  width:'40%' ,marginTop:'-80px' ,height:'78px',  objectFit:'cover'}}/>
            <Photo src={Photo6} style={{  width:'98%' ,marginTop:'-22px' ,height:'150px',  objectFit:'cover'}}/>
        </Photos>

        </Screen>
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
            深い海でも使えるカメラを持っいる人が多数いま<br></br>
            す。また、学祭の売り上げで買ったドローンで空<br></br>
            からもたくさん写真を撮っています。

          </Content>
        </FooterText>
  <Footer />
  </>
=======
    <>
      <Header />
      <Temp>現在開発中です🙇‍♂️</Temp>
      {/* <Footer /> */}
    </>
>>>>>>> 2b730b23d82cfc5de3485e9b532e8f065574d7a6
  );
};

// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `
<<<<<<< HEAD
const Screen = styled.div`
  height: 190vh;
=======
const Temp = styled.div`
  height: 100vh;
>>>>>>> 2b730b23d82cfc5de3485e9b532e8f065574d7a6
  width: 100%;
  background-color: #faf8f5;
  align-items: center;
  justify-content: center;
  font-family: ヒラギノ明朝 ProN;
`;

const Title = styled.h1`
  position: absolute;
  top: 40px;
  left: 5%;
  right: 5%;
  text-align: center;
  font-family: "Savoye LET", consive;
  color: #030f8f;
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

const Movie = styled.div`
  position: relative;
  font-family: ヒラギノ明朝 ProN;
  // background-color: #ddd;
  top: 300px;
  width:90%;
  height:850px;
  margin:0 auto;
`;

const Text = styled.div`
  font-family: ヒラギノ明朝 ProN;
  // background-color: #fff;
  width:100;
  font-size:30px;
  text-align:left;
  border-bottom:solid 1px black;
`;

const Movie2019 = styled.div`
  font-family: ヒラギノ明朝 ProN;
  width:320px;
  // height:180px;
  margin:20px auto;
`;

const Movie2018 = styled.div`
  font-family: ヒラギノ明朝 ProN;
  width:320px;
  height:180px;
  margin:20px auto;
`;

const Photos = styled.div`
  font-family: ヒラギノ明朝 ProN;
  width:90%;
  margin: 0 auto;

`;

const Photo = styled.img`
  // position: inline-block;
  background-color: black;
  vertical-align: top;
  width:32%;
  margin:2px;
`;

const FooterText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 15px;
  font-family: "ヒラギノ明朝 ProN", serif;
  top: 175vh;
  width: 90%;
  left: 5%;
  right: 5%;
  height: 12vh;
`;
const Content = styled.div`
  margin-top: 1.5vh;
`;
export default Gallery;
