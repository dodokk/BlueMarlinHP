import React, { useState } from "react";
// import history from "../../utils/history";
import styled from "styled-components";
import backgroud from "../../assets/aboutus/back5.jpg";
import pict1 from "../../assets/aboutus/1.jpg";
import pict2 from "../../assets/aboutus/2.jpg";
import pict3 from "../../assets/aboutus/3.jpg";
import logo from "../../assets/aboutus/安く.png";
import logo2 from "../../assets/aboutus/楽しく.png";
import logo3 from "../../assets/aboutus/安全に.png";
import Header from "../BaseWrapper/Header";
import Footer from "../BaseWrapper/Footer";
// import ReactVivus from "react-vivus";
// import svg1 from "../images/Aboutus/footertext.svg";

const Aboutus: React.FC = props => {
  // コンポーネントが状態を持つときは↓を使う
  // const [状態変数, 状態変数を変更する関数] = useState(初期値);
  // const [samplestate, setSamplestate] = useState("initial");

  // ページ遷移するときは↓を使う
  // const goto〇〇 = () => {
  //   history.push("/{移動したいpath}")
  // };
  console.log(logo);
  console.log(logo2);
  console.log(logo3);

  return (
    <>
      <Header />
      <Main style={{}}>
        <div>
          <Title>About us</Title>
          <Font>ダイビングサークルBlueMarlin</Font>
          <Font>春夏秋冬問わず活動しています。</Font>
          <Box>
            <Pict1></Pict1>
            <Text>Blue Marlinとは</Text>
            <Text2>
              BLUEMARLINは横浜国立大学、フェリス女学院大学、
              東洋英和女学院大学を中心に集まったインカレスキューバダイビングサークルです。
              私たち、通称”ぶるまり”は男子は16名、女子は18名！少人数サークルなのでメンバー同士の仲がとてもよく家族のような居心地の良さが売りです。
              普通の大学生活が嫌なきみ！海が好きなきみ！せっかくの大学生活楽しみたいきみ！最高な仲間と一緒に誰よりも熱い夏を過ごそう！
            </Text2>
          </Box>
          <Box>
            <Pict2></Pict2>
            <Text>ダイビングとは</Text>
            <Text2>
              今流行りのマリンレジャー”スキューバダイビング”、
              ドラマやバラエティー番組でも見る機会が増えています。水族館で水槽に入れたらな。。
              なんて夢ももっと壮大なスケールで実現するのです。世界の7割が海という塩水でおおわれています。
              陸での生活だけじゃ世界を三割しか楽しめない！さぁ！ダイビングを始めよう！この時期はいろいろと不安だと思いますが思い切って飛び込んできてください！待ってます！
            </Text2>
          </Box>
          <Box>
            <Pict3></Pict3>
            <Text>モットー</Text>
            <Box2>
              <P>
                <p>安く</p>
                <p></p>
                <Figure>
                  <img src={logo} width="94" height="94" alt="Logo" />
                </Figure>
                {/* <Logo1></Logo1> */}
                <span>
                  お金がかかりそうなスキューバダイビングですが、学生であることや、ダイビングショップのお手伝いをしたりすることで最大限安く活動できるように工夫しています。
                </span>
              </P>
            </Box2>
            <Box2>
              <P>
                <p>楽しく</p>
                <p></p>
                <Figure>
                  <img src={logo2} width="94" height="94" alt="Logo" />
                </Figure>
                <span>
                  ぶるまりの夏は世界一楽しいことは保証します！せっかく横浜の大学に来たのに、ぶるまりに入らなかったらもったいない！新しいことを最高な仲間と始めよう！
                </span>
              </P>
            </Box2>
            <Box2>
              <P>
                <p>安全に</p>
                <p></p>
                <Figure>
                  <img src={logo3} width="94" height="94" alt="Logo" />
                </Figure>
                {/* <Logo1></Logo1> */}
                <span>
                  ダイビングは興味あるけど、泳げないから不安なあなた。ぶるまりは現役メンバーにレスキューダイバーが何人もいてOBにはインストラクターもいるから安全！だから、創立以来22年間無事故！
                </span>
              </P>
            </Box2>
          </Box>
          <Box3>
            {/* <ReactVivus
            id=" foo "
            option={{
              file: svg1,
              type: "scenario-sync",
              duration: 100,
              animTimingFunction: " EASE "
            }}
            style={{ width: " 295px", position: "relative", top: "" }}
          /> */}
            <Font2>
              横浜にはたくさんのダイビングサークルがありますが、その中でブルーマーリンが誇れるところは「セルフダイビングができること」と「ダイビングの本数」が多いことです。
            </Font2>
          </Box3>
        </div>
      </Main>
      <Footer />
    </>
  );
};
// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `

const Main = styled.section`
  height: 85%;
  width: 100%;
  text-align: center;
  padding: 30px 0;
  :before{
    content:"";
    display:block;
    position:fixed;
    top:0;
    left:0;
    z-index:-1;
    width:100%;
    height:100vh;
    background:url(${backgroud});
    background-size:cover;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3px;
  font-family: "Savoye LET", consive;
  color: #f0f8ff;
  font-size: 80px;
  font-weight: lighter;
`;
const Font = styled.p`
  font-size: 15px;
  font-family: "ヒラギノ明朝 ProN", serif;
  color: #f0f8ff;
  font-weight: lighter;
`;
const Font2 = styled.p`
  height: 93px;
  width: 314px;
  font-size: 15px;
  text-align: left;
  font-family: "ヒラギノ明朝 ProN", serif;
  color: #f0f8ff;
  font-weight: lighter;
  margin: 0px auto;
`;
const Box = styled.div`
  margin: auto;
  margin-top: 50px;
  position: relative;
  padding: 0.5em 1.5em;
  width: 295px;
  border-top: solid 1px white;
  border-bottom: solid 1px white;
  :before,
  :after {
    content: "";
    position: absolute;
    top: 20px;
    width: 1px;
    height: -webkit-calc(100% - 40px);
    height: calc(100% - 40px);
    background-color: white;
  }
  :before {
    left: -10px;
  }
  :after {
    right: -10px;
  }
`;

const Box2 = styled.div`
  height: 180px;
  width: 323px;
  // margin: 0px auto;
  margin-top: -20px;
`;

const Box3 = styled.div`
  // padding-top: 20px;
  // top: 20px;
  border-left: solid 1px white;
  margin: auto;
  height: 40px;
  margin-top: 50px;
  margin-bottom: 70px;
  position: relative;
  padding: 0.8em 1.5em;
  width: 315px;
  :before {
    content: "";
    position: absolute;
    left: 290px;
    top: -5px; /*線の上下位置*/
    display: inline-block;
    width: 150px; /*線の長さ*/
    height: 1px; /*線の太さ*/
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%); /*位置調整*/
    background-color: white; /*線の色*/
  }
  :after {
    content: "";
    position: absolute;
    left: 180px;
    bottom: -60px; /*線の上下位置*/
    display: inline-block;
    width: 210px; /*線の長さ*/
    height: 1px; /*線の太さ*/
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%); /*位置調整*/
    background-color: white; /*線の色*/
  }
`;
// const Box4 = styled.div`
//   margin: auto;
//   margin-top: 50px;
//   position: relative;
//   padding: 0.5em 1.5em;
//   width: 295px;
// `;

const Text = styled.div`
  font-size: 30px;
  font-family: "Bodoni 72 Oldstyle";
  color: #f0f8ff;
  font-weight: Bold;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

// const FooterText = styled.div`
//   margin: auto;
//   margin-top: 30px;
//   position: relative;
//   // padding: 0.5em 1.5em;
//   width: 295px;
//   // position: absolute;
//   text-align: center;
//   font-size: 15px;
//   paddingfont-family: ヒラギノ明朝 ProN;
//   // top: 113vh;
//   // width: 295px;
//   left: 5%;
//   right: 5%;
//   // background-color:#ddd;
//   // height: 12vh;
// `;

const Text2 = styled.p`
  height: 215px;
  width: 309px;
  font-size: 13px;
  font-family: "Bodoni 13";
  color: #f0f8ff;
  font-weight: lighter;
  text-align: left;
  margin: 0px auto;
`;

const P = styled.div`
  text-align: left;
  span {
    text-align: left;
    font-size: 13px;
    font-family: "Bodoni 72 ";
    color: #f0f8ff;
    font-weight: lighter;
  }
  p {
    font-size: 18px;
    font-family: "Bodoni 72 Oldstyle";
    color: #f0f8ff;
    font-weight: Bold;
    text-align: left;
    margin-bottom: -20px;
    margin-left: 8px;
  }
`;

const Pict1 = styled.div`
  height: 242px;
  width: 306px;
  background-image: url(${pict1});
  background-size: cover;
  margin: 0 auto;
  margin-top: 20px;
`;

const Pict2 = styled.div`
  height: 242px;
  width: 306px;
  background-image: url(${pict2});
  background-size: cover;
  margin: 0 auto;
  margin-top: 20px;
`;

const Pict3 = styled.div`
  height: 242px;
  width: 306px;
  background-image: url(${pict3});
  background-size: cover;
  margin: 0 auto;
  margin-top: 15px;
`;

const Figure = styled.figure`
  float: left;
  margin-left: -20px;
  margin-right: 10px;
`;

// const Content = styled.div`
//   margin-top: 1.5vh;
// `;

export default Aboutus;
