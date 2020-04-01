import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import { Reveal, RevealMode, Animation } from "react-genie";
import Header from "../BaseWrapper/Header";
import Footer from "../BaseWrapper/Footer";

const QandA: React.FC = props => {
  // コンポーネントが状態を持つときは↓を使う
  // const [状態変数, 状態変数を変更する関数] = useState(初期値);
  // const [samplestate, setSamplestate] = useState("initial");

  // ページ遷移するときは↓を使う
  // const goto〇〇 = () => {
  //   history.push("/{移動したいpath}")
  // };

  return (
    <>
      <Header />

      <Screen>
        <Title>Q&A</Title>
        <TitleText>
          ブルーマーリンについて<br></br>
          良くある質問をまとめました。
        </TitleText>
        <TalkBox>
          <FAQ>良くある質問</FAQ>
          <Reveal
            animation={Animation.SlideInLeft}
            delay={0}
            mode={RevealMode.Clone}
          >
            <Question>やっぱりぶっちゃけ高いよね…？</Question>
          </Reveal>
          <Reveal
            animation={Animation.SlideInRight}
            delay={200}
            mode={RevealMode.Clone}
          >
            <Answer>
              そのイメージはダイビングを始 める人が社会人が多いから。学
              生で尚且つ団体なので一般の人 が仰天するような破格の値段で
              機材が買えたり、合宿を行うこ とができています。ダイビング
              は一生続けられる生涯レジャー の一つです。お得な学生のうち
              に始めよう！
              <br></br>
              <br></br>
              また、値段の詳細については新 歓で詳しい資料を配ります。ぜ
              ひ新歓へお越しください！
            </Answer>
          </Reveal>
          <Reveal
            animation={Animation.SlideInLeft}
            delay={500}
            mode={RevealMode.Clone}
          >
            <Question>ダイビングって危なくない？</Question>
          </Reveal>
          <Reveal
            animation={Animation.SlideInRight}
            delay={700}
            mode={RevealMode.Clone}
          >
            <Answer>
              陸上スポーツやマリンスポー ツにおける怪我の発生率
              ※PADIレスキューマニュアル アメフト：2.17%<br></br>
              野球：2.09%<br></br>
              バスケ：1.86%<br></br>
              テニス：0.12%<br></br>
              ボーリング：0.04%<br></br>
              ダイビング：0.04%<br></br>
              というように、怪我をする確率 はほぼ０に近いスポーツです。
              それはダイビングを催行する各 ダイビングショップがそれぞれ
              しっかりとした安全対策をして いるから。波が高いときや、流
              れが強いときは無理をしてまで は潜りません！
              <br></br>
              <br></br>
              また、ぶるまりは伊豆や伊豆諸 島で潜る際にプロのインストラ
              クターをつけずに自分たちだけ で潜りますが、各代にそのダイ
              ビングポイントを熟知したガイ ドメンバーが4~5名ずついるの
              で、安心！安全のための講習も 定期的に受けています。<br></br>
              こうした取り組みのお陰もあり 創設以来22年間無事故で活動し
              ています。
            </Answer>
          </Reveal>
          <Reveal animation={Animation.SlideInLeft} delay={700}>
            <Question>泳ぐ事に自信がありません...</Question>
          </Reveal>
          <Reveal animation={Animation.SlideInRight} delay={800}>
            <Answer>
              ダイビングは泳ぎの得意不得意 は関係ないから安心して！息だ
              ってできるし、まるで宇宙にい るみたいな浮遊感は水泳とはま
              ったくの別物だよ！<br></br>
              水さえ怖くなかったら基本的に OK!実際に泳げないメンバーは
              何人もいます。
            </Answer>
          </Reveal>
          <Reveal animation={Animation.SlideInLeft} delay={1500}>
            <Question>サメに食べられたらどうしよう。</Question>
          </Reveal>
          <Reveal animation={Animation.SlideInRight} delay={1700}>
            <Answer>
              食べられたら痛いと思います。 でも、人食いザメがいるような
              海域はダイビングポイントにな らないから安心して！私たちが
              ダイビング中に出会うサメはダ イバーを見ると逃げようとする
              ようなおとなしいサメばかりで す。想像がつきにくいと思うの
              で、陸上の生物にたとえると、 日本に野生のトラがいないの同
              じように海の中にも生息域があ るのです。
            </Answer>
          </Reveal>
        </TalkBox>
      </Screen>
      <Footer />
    </>
  );
};

// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} =   styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `
const Screen = styled.div`
  height: 340vh;
  width: 100%;
  background-color: #faf8f5;
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
const TalkBox = styled.div`
  // height: 120vh;
  width: 80%;
  background-color: #faf8f5;
  border: solid 10px #030f80;
  border-radius: 20px;
  position: absolute;
  right: 5%;
  left: 5%;
  margin: 0 auto 20vh auto;
  top: 35vh;
  padding: 0 10px 20px 10px;
  font-family: "ヒラギノ明朝 ProN", serif;
  font-weight: 900;
`;

const FAQ = styled.div`
  height: 7vh;
  width: 90%;
  position: relative;
  margin: 0 auto;
  border-bottom: solid 1px black;
  line-height: 8vh;
  font-size: 21px;
  font-family: "ヒラギノ明朝 ProN", serif;
  font-weight: 900;
`;

const Question = styled.div`
  background-color: #030f80;
  width: 60%;
  color: white;
  border-radius: 15px;
  padding: 10px;
  line-height: 3vh;
  margin: 20px 0 auto 0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
`;

const Answer = styled.div`
  background-color: #fff;
  color: black;
  border-radius: 15px;
  padding: 10px;
  line-height: 3vh;
  margin: 20px 0 0 auto;
  width: 75%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
`;

export default QandA;
