import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import backgroud from "../../assets/aboutus/back2.png";
import pict1 from "../../assets/aboutus/1.jpg";
import pict2 from "../../assets/aboutus/2.jpg";
import pict3 from "../../assets/aboutus/3.jpg";
import logo from "../../assets/aboutus/安く.png";
import logo2 from "../../assets/aboutus/楽しく.png";
import logo3 from "../../assets/aboutus/安全に.png";
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
      <body>
        {/* <Header>
          <div>
            <div>タブメニュー</div>
          </div>
        </Header> */}
        <Main>
          <div>
            <Title>About us</Title>
            <Font>ダイビングサークルBlueMarlin。</Font>
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
                    お金がかかりそうなスキューバ ダイビングですが、学生である
                    ことや、ダイビングショップの お手伝いをしたりすることで最
                    大限安く活動できるように工夫 しています。
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
                    ぶるまりの夏は世界一楽しいことは保証します！せっかく横浜
                    の大学に来たのに、ぶるまりに入らなかったらもったいない！
                    新しいことを最高な仲間と始めよう！
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
                    ダイビングは興味あるけど、泳げないから不安なあなた。ぶる
                    まりは現役メンバーにレスキューダイバーが何人もいてOBには
                    インストラクターもいるから安全！だから、創立以来22年間無
                    事故！
                  </span>
                </P>
              </Box2>
            </Box>
            <Box>
              <Font2>
                横浜にはたくさんのダイビングサークルがあり
                ますが、その中でブルーマーリンが誇れるとこ
                ろは「セルフダイビングができること」と
                「ダイビングの本数」が多いことです。
              </Font2>
            </Box>
          </div>
        </Main>
        <Footer>
          <div>お問い合わせ</div>
        </Footer>
      </body>
    </>
  );
};
// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `

const Footer = styled.footer`
  height: 10%;
  width: 100%;
  text-align: center;
  padding: 40px 0;
  background-color: white;
`;

const Main = styled.section`
  height: 85%;
  width: 100%;
  text-align: center;
  padding: 50px 0;
  background-color: black;
  background-image: url(${backgroud});
  background-position: top;
  background-repeat: no-repeat;
  // background-size: cover;
`;
// const Header = styled.header`
//   height: 5%;
//   width: 100%;
//   text-align: center;
//   padding: 20px 0;
//   background-color: black;
// `;
const Title = styled.h1`
  text-align: center;
  font-family: "Savoye LET", consive;
  color: #f0f8ff;
  font-size: 80px;
  font-weight: lighter;
`;
const Font = styled.p`
  font-size: 15px;
  font-family: "ヒラギノ明朝 ProN", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝",
    serif;
  color: #f0f8ff;
  font-weight: lighter;
`;
const Font2 = styled.p`
  height: 93px;
  width: 314px;
  font-size: 15px;
  text-align: left;
  font-family: "ヒラギノ明朝 ProN", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝",
    serif;
  color: #f0f8ff;
  font-weight: lighter;
  margin: 0px auto;
`;
const Box = styled.div`
  // padding: 0.5em 1em;
  // margin: 2em 0;
  // color: white;
  // // background: whitesmoke;
  // border-left: solid 3px white;
  // border-right: solid 3px white;
  // border-top: solid 3px white;
  // border-bottom: solid 3px white;
  margin: 2em 0;
  position: relative;
  padding: 0.5em 1.5em;
  border-top: solid 2px white;
  border-bottom: solid 2px white;
  :before,
  :after {
    content: "";
    position: absolute;
    top: 10px;
    width: 2px;
    height: -webkit-calc(100% - 20px);
    height: calc(100% - 20px);
    background-color: white;
  }
  :before {
    left: 5px;
  }
  :after {
    right: 5px;
  }
`;

const Box2 = styled.div`
  height: 170px;
  width: 350px;
  margin: 0px auto;
`;

const Text = styled.div`
  font-size: 30px;
  font-family: "Bodoni 72 Oldstyle";
  color: #f0f8ff;
  font-weight: Bold;
  text-align: center;
`;

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

const Text3 = styled.p`
  font-size: 18px;
  font-family: "Bodoni 72 Oldstyle";
  color: #f0f8ff;
  font-weight: lighter;
  text-align: left;
  margin: 2px 30px;
`;

const P = styled.p`
  span {
    height: 157px;
    width: 183px;
    font-size: 13px;
    font-family: "Bodoni 72 ";
    color: #f0f8ff;
    font-weight: lighter;
    text-align: left;
  }
  p {
    font-size: 18px;
    font-family: "Bodoni 72 Oldstyle";
    color: #f0f8ff;
    font-weight: Bold;
    text-align: left;
    margin: 2px 30px;
  }
`;

const Pict1 = styled.div`
  height: 242px;
  width: 306px;
  background-image: url(${pict1});
  background-size: cover;
  margin: 0 auto;
`;

const Pict2 = styled.div`
  height: 242px;
  width: 306px;
  background-image: url(${pict2});
  background-size: cover;
  margin: 0 auto;
`;

const Pict3 = styled.div`
  height: 242px;
  width: 306px;
  background-image: url(${pict3});
  background-size: cover;
  margin: 0 auto;
`;

const Logo1 = styled.p`
  height: 94px;
  width: 94px;
  background-image: url(${pict3});
  background-size: cover;
  align: left;
`;
const Figure = styled.figure`
  float: left;
`;
// const Text3 = styled.p`
//   height: 133px;
//   width: 182px;
//   font-size: 13px;
//   font-family: "Bodoni 72";
//   color: #f0f8ff;
//   font-weight: lighter;
//   text-align: left;
//   align: right;
// `;
const Test = styled.div`
  height: 10000px;
  width: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Aboutus;
