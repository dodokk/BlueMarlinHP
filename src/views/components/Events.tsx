import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Parallax from "react-rellax";
import Apr1 from "../images/Events/Apr1.jpg";
import Apr2 from "../images/Events/Apr2.jpg";
import May1 from "../images/Events/May1.jpg";
import May2 from "../images/Events/May2.jpg";
import Jun1 from "../images/Events/Jun1.jpg";
import Jun2 from "../images/Events/Jun2.jpg";
import Jul1 from "../images/Events/Jul1.jpg";
import Jul2 from "../images/Events/Jul2.jpg";
import Aug1 from "../images/Events/Aug1.jpg";
import Aug2 from "../images/Events/Aug2.jpg";
import Aug3 from "../images/Events/Aug3.jpg";
import Sep1 from "../images/Events/Sep1.jpg";
import Sep2 from "../images/Events/Sep2.jpg";
import Sep3 from "../images/Events/Sep3.jpg";
import Oct1 from "../images/Events/Oct1.jpg";
import Oct2 from "../images/Events/Oct2.jpg";
import Nov1 from "../images/Events/Nov1.jpg";
import Nov2 from "../images/Events/Nov2.jpg";
import Dec1 from "../images/Events/Dec1.jpg";
import Jan1 from "../images/Events/Jan1.jpg";
import Feb1 from "../images/Events/Feb1.jpg";
import Feb2 from "../images/Events/Feb2.jpg";
import Mar1 from "../images/Events/Mar1.jpg";
import Mar2 from "../images/Events/Mar2.jpg";
import Mar3 from "../images/Events/Mar3.jpg";
import Header from "../BaseWrapper/Header";
import Footer from "../BaseWrapper/Footer";
import { Reveal, AnimatedTitle, Animation } from "react-genie";
import ReactVivus from "react-vivus";
import svg1 from "../images/Member/footertext.svg";

const Events: React.FC = props => {
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
        <Title>Events</Title>
        <TitleText>
          ここは物語が始まるところ。<br></br>
          素敵な仲間と青に囲まれ過ごす生活。
        </TitleText>
        <Calender>
          <April id="Apr">
            <Parallax speed={0.5}>
              <Month>April</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={1}>
              <AprilImage1>
                <Image src={Apr1} />
              </AprilImage1>
            </Parallax>
            <AprilText1>
              新入生歓迎会。<br></br>
              新しいサークルのメンバーを<br></br>
              勧誘します。
            </AprilText1>
            <Parallax speed={1}>
              <AprilImage2>
                <Image src={Apr2} />
              </AprilImage2>
            </Parallax>
            <Parallax speed={2}>
              <AprilText2>
                1年生正直めちゃめちゃ可愛い笑<br></br>
                そんな１年生にどうにかブルマリ<br></br>
                の良さを知ってもらうべく何ヶ月<br></br>
                も前から準備を始めます。
              </AprilText2>
            </Parallax>
          </April>

          <May id="May">
            <Parallax speed={0.5}>
              <Month>May</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={1}>
              <MayImage1>
                <Image src={May1} />
              </MayImage1>
            </Parallax>
            <Parallax speed={1.5}>
              <MayText1>
                BBQおいしいお肉をたくさん食べる企画。<br></br>
                OB・OGと初の顔合わせ。<br></br>
              </MayText1>
            </Parallax>
            <Parallax speed={1}>
              <MayImage2>
                <Image src={May2} />
              </MayImage2>
            </Parallax>
            <MayText2>
              一年生のライセンス合宿。<br></br>
              ダイビングのライセンスを<br></br>
              取るための合宿です。
            </MayText2>
          </May>

          <Jun id="Jun">
            <Parallax speed={0.5}>
              <Month>Jun</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={2}>
              <JunImage1>
                <Image src={Jun1} />
              </JunImage1>
            </Parallax>
            <Parallax speed={1}>
              <JunText1>
                キャンプ。初めての３代での合宿です。<br></br>
                毎年違う場所で遊び倒します。編集者<br></br>
                はこの企画が一番好きかな笑
              </JunText1>
            </Parallax>
            <Parallax speed={1.5}>
              <JunImage2>
                <Image src={Jun2} />
              </JunImage2>
            </Parallax>
            <Parallax speed={1.5}>
              <JunText2>
                これまた初めての３代でのファンダイビング<br></br>
                静岡県の大瀬崎でダイビングします。生物が<br></br>
                豊富でとても楽しいです。
              </JunText2>
            </Parallax>
          </Jun>

          <July id="Jul">
            <Parallax speed={0.5}>
              <Month>July</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={1.5}>
              <JulyImage1>
                <Image src={Jul1} />
              </JulyImage1>
            </Parallax>
            <Parallax speed={1}>
              <JulyImage2>
                <Image src={Jul2} />
              </JulyImage2>
            </Parallax>
            <JulyText1>
              2ファン。七夕という事で<br></br>
              願い事を書いた短冊を<br></br>
              海の中の竹にかけてきます。
            </JulyText1>
          </July>

          <August id="Aug">
            <Parallax speed={0.5}>
              <Month>August</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={1}>
              <AugustImage1>
                <Image src={Aug1} />
              </AugustImage1>
            </Parallax>
            <AugustText1>
              夏ファン。一泊二日で<br></br>
              ダイビング合宿<br></br>
            </AugustText1>
            <Parallax speed={1.5}>
              <AugustImage2>
                <Image src={Aug2} />
              </AugustImage2>
            </Parallax>
            <Parallax speed={0.5}>
              <AugustText2>
                長岡花火<br></br>
                とても綺麗です。
              </AugustText2>
            </Parallax>
            <AugustImage3>
              <Image src={Aug3} />
            </AugustImage3>
            <Parallax speed={1}>
              <AugustText3>
                人気ナンバー２、八丈島合宿。３泊４日で<br></br>
                伊豆諸島の八丈島へ。竹芝から約12時間ほ<br></br>
                どかけて島へ向かいます。伊豆諸島特有の<br></br>
                魚や深い青色をした海はとても神秘的です。
              </AugustText3>
            </Parallax>
          </August>

          <September id="Sep">
            <Parallax speed={0.5}>
              <Month>September</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={1.5}>
              <SeptemberImage1>
                <Image src={Sep1} />
              </SeptemberImage1>
            </Parallax>
            <Parallax speed={2}>
              <SeptemberImage2>
                <Image src={Sep2} />
              </SeptemberImage2>
            </Parallax>
            <Parallax speed={0.5}>
              <SeptemberImage3>
                <Image src={Sep3} />
              </SeptemberImage3>
            </Parallax>

            <SeptemberText1>
              沖縄合宿。この合宿がブルマリのメインイ<br></br>
              ベント。９月の沖縄合宿で３年生は引退し<br></br>
              ます。約１週間仲間と共に過ごすかけがえ<br></br>
              のない時間は、一生忘れることのない思い<br></br>
              出になる事でしょう。
            </SeptemberText1>
          </September>

          <Octber id="Oct">
            <Parallax speed={0.5}>
              <Month>Octber</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={1}>
              <OctberImage1>
                <Image src={Oct1} />
              </OctberImage1>
            </Parallax>
            <Parallax speed={1.5}>
              <OctberImage2>
                <Image src={Oct2} />
              </OctberImage2>
            </Parallax>
            <Parallax speed={2}>
              <OctberText1>
                秋大瀬と横国学祭。秋の大瀬は夏<br></br>
                とは一風変わり、景色はもちろん<br></br>
                海の中の生物も変わります。<br></br>
                そして、学祭。サークルで模擬店<br></br>
                を出店し売り上げでドローンや<br></br>
                Goproを購入しました。<br></br>
              </OctberText1>
            </Parallax>
          </Octber>

          <November id="Nov">
            <Parallax speed={0.5}>
              <Month>November</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <NovemberImage1>
              <Image src={Nov1} />
            </NovemberImage1>
            <Parallax speed={1}>
              <NovemberImage2>
                <Image src={Nov2} />
              </NovemberImage2>
            </Parallax>
            <NovemberText1>
              温泉合宿。三年生が引退し<br></br>
              ２代で初めての合宿<br></br>
              地方の温泉に行き、お揃いの<br></br>
              ジャージを着て２代の仲が<br></br>
              より一層深まる企画です。<br></br>
            </NovemberText1>
          </November>

          <December id="Dec">
            <Parallax speed={0.5}>
              <Month>December</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <DecemberImage1>
              <Image src={Dec1} />
            </DecemberImage1>
            <DecemberText1>
              クリスマスパーティー。ぶるまりの１年の<br></br>
              締めくくりはクリスマスパーティーです。<br></br>
              女子はドレスアップをし、男子はスーツを<br></br>
              着てバチバチにキメていきます笑
            </DecemberText1>
          </December>

          <January id="Jan">
            <Parallax speed={0.5}>
              <Month>January</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={1}>
              <JanuaryImage1>
                <Image src={Jan1} />
              </JanuaryImage1>
            </Parallax>
            <JanuaryText1>
              初詣。<br></br>
              一年の始まりはみんなで<br></br>
              箱根へ初詣でがてら観光も<br></br>
            </JanuaryText1>
          </January>

          <February id="Feb">
            <Parallax speed={0.5}>
              <Month>February</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <Parallax speed={1}>
              <FebruaryImage1>
                <Image src={Feb1} />
              </FebruaryImage1>
            </Parallax>
            <FebruaryImage2>
              <Image src={Feb2} />
            </FebruaryImage2>
            <FebruaryText1>
              スノボ合宿。冬の人気企画。<br></br>
              1泊2日でのんびりみんなで<br></br>
              スノーボードをします。<br></br>
              （先輩が優しく教えてく<br></br>
              れます♡）
            </FebruaryText1>
          </February>

          <March id="Mar">
            <Parallax speed={1}>
              <Month>March</Month>
              <Tabs>
                <AnchorLink href="#Apr" offset="80">
                  Apr.
                </AnchorLink>
                <AnchorLink href="#May" offset="100">
                  May.
                </AnchorLink>
                <AnchorLink href="#Jun" offset="120px">
                  Jun.
                </AnchorLink>
                <AnchorLink href="#Jul" offset="150px">
                  Jul.
                </AnchorLink>
                <AnchorLink href="#Aug" offset="200px">
                  Aug.
                </AnchorLink>
                <AnchorLink href="#Sep" offset="250px">
                  Sep.
                </AnchorLink>
                <AnchorLink href="#Oct" offset="300px">
                  Oct.
                </AnchorLink>
                <AnchorLink href="#Nov" offset="350px">
                  Nov.
                </AnchorLink>
                <AnchorLink href="#Dec" offset="400px">
                  Dec.
                </AnchorLink>
                <AnchorLink href="#Jan" offset="420px">
                  Jan.
                </AnchorLink>
                <AnchorLink href="#Feb" offset="480px">
                  Feb.
                </AnchorLink>
                <AnchorLink href="#Mar" offset="950px">
                  Mar.
                </AnchorLink>
              </Tabs>
            </Parallax>
            <MarchImage1>
              <Image src={Mar1} />
            </MarchImage1>
            <MarchImage2>
              <Image src={Mar2} />
            </MarchImage2>
            <MarchImage3>
              <Image src={Mar3} />
            </MarchImage3>
            <MarchText1>
              海外合宿。これまたぶるまりの１大イベン<br></br>
              トとも言える海外合宿。日本の海とは一味<br></br>
              も二味も違う海外の海でのダイビングはな<br></br>
              かなか経験できることではない事です。
            </MarchText1>
          </March>
        </Calender>
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
            ぶるまりは海だけではなく陸でも楽しく活動をし<br></br>
            ています。１年を通して様々な企画があり、どれ<br></br>
            もとても充実した物になっています。
          </Content>
        </FooterText>
      </Screen>
      <Footer />
    </>
  );
};

// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `
const Screen = styled.div`
  height: 1100vh;
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
  top: 180px;
  padding: 0;
  left: 10%;
  right: 10%;
  color: #000;
  text-align: center;
  font-size: 15px;
`;
const Calender = styled.div`
  position: absolute;
  width: 100%;
  height: 300vh;
  top: 300px;
  text-align: center;
`;
const April = styled.div`
  position: relative;
  height: 110vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const May = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const Jun = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const July = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const August = styled.div`
  position: relative;
  height: 140vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const September = styled.div`
  position: relative;
  height: 110vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const Octber = styled.div`
  position: relative;
  height: 75vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const November = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const December = styled.div`
  position: relative;
  height: 85vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const January = styled.div`
  position: relative;
  height: 65vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const February = styled.div`
  position: relative;
  height: 120vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
  // background-color:#ddd;
`;
const March = styled.div`
  position: relative;
  height: 0vh;
  width: 100%;
  font-family: ヒラギノ明朝 ProN;
`;
const Month = styled.text`
  font-size: 27px;
  text-decoration: underline;
`;
const Tabs = styled.div`
  font-size: 17px;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  transition: all 5s;
  ::-webkit-scrollbar {
    display: none;
  }
  a {
    color: #a7a7a7;
    text-decoration: none;
    margin: 8px;
  }
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const AprilImage1 = styled.div`
  position: absolute;
  top: 10vh;
  left: 10%;
  width: 40vw;
  height: 30vh;
  background-color: #ddd;
`;
const AprilText1 = styled.div`
  position: absolute;
  writing-mode: vertical-rl;
  text-align: start;
  font-size: 13px;
  top: 120px;
  right: 20%;
  letter-spacing: 3px;
`;
const AprilImage2 = styled.div`
  position: absolute;
  top: 50vh;
  right: 0%;
  width: 70vw;
  height: 25vh;
  background-color: #ddd;
`;
const AprilText2 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  top: 100vh;
  right: 10%;
  letter-spacing: 3px;
`;

const MayImage1 = styled.div`
  position: absolute;
  top: 15vh;
  left: 0;
  width: 60vw;
  height: 20vh;
  background-color: #ddd;
`;

const MayText1 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  top: 45vh;
  right: 10%;
  letter-spacing: 3px;
`;

const MayImage2 = styled.div`
  position: absolute;
  top: 50vh;
  right: 0;
  width: 55vw;
  height: 30vh;
  background-color: #ddd;
`;

const MayText2 = styled.div`
  position: absolute;
  writing-mode: vertical-rl;
  text-align: start;
  font-size: 13px;
  top: 45vh;
  left: 10%;
  letter-spacing: 3px;
`;

const JunImage1 = styled.div`
  position: absolute;
  top: 50vh;
  width: 100%;
  height: 30vh;
  background-color: #ddd;
`;

const JunText1 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  top: 55vh;
  right: 10%;
  letter-spacing: 3px;
`;

const JunImage2 = styled.div`
  position: absolute;
  top: 85vh;
  width: 70%;
  height: 20vh;
  left: 5%;
  background-color: #ddd;
`;

const JunText2 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  top: 110vh;
  right: 10%;
  letter-spacing: 3px;
`;

const JulyImage1 = styled.div`
  position: absolute;
  top: 50vh;
  left: 0;
  width: 70%;
  height: 20vh;
  background-color: #ddd;
`;

const JulyImage2 = styled.div`
  position: absolute;
  top: 55vh;
  right: 0;
  width: 60%;
  height: 20vh;
  background-color: #ddd;
`;

const JulyText1 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  top: 50vh;
  left: 10%;
  letter-spacing: 3px;
`;

const AugustImage1 = styled.div`
  position: absolute;
  top: 30vh;
  left: 5%;
  width: 60%;
  height: 30vh;
  background-color: #ddd;
`;

const AugustText1 = styled.div`
  position: absolute;
  writing-mode: vertical-rl;
  text-align: start;
  font-size: 13px;
  top: 0vh;
  right: 12%;
  letter-spacing: 3px;
`;

const AugustImage2 = styled.div`
  position: absolute;
  top: 100vh;
  right: 5%;
  width: 50%;
  height: 20vh;
  background-color: #ddd;
`;

const AugustText2 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  top: 50vh;
  left: 5%;
  letter-spacing: 3px;
`;

const AugustImage3 = styled.div`
  position: absolute;
  top: 55vh;
  width: 100%;
  height: 30vh;
  background-color: #ddd;
`;
const AugustText3 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  left: 7%;
  top: 140vh;
  letter-spacing: 3px;
`;

const SeptemberImage1 = styled.div`
  position: absolute;
  top: 75vh;
  left: 5%;
  width: 90%;
  height: 35vh;
  background-color: #ddd;
`;

const SeptemberImage2 = styled.div`
  position: absolute;
  top: 160vh;
  left: 0%;
  width: 47%;
  height: 20vh;
  background-color: #ddd;
`;
const SeptemberImage3 = styled.div`
  position: absolute;
  top: 50vh;
  right: 0%;
  width: 47%;
  height: 20vh;
  background-color: #ddd;
`;

const SeptemberText1 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  left: 7%;
  top: 50vh;
  letter-spacing: 3px;
`;

const OctberImage1 = styled.div`
  position: absolute;
  top: 55vh;
  right: 0%;
  width: 40%;
  height: 30vh;
  background-color: #ddd;
`;

const OctberImage2 = styled.div`
  position: absolute;
  top: 95vh;
  left: 0%;
  width: 55%;
  height: 20vh;
  background-color: #ddd;
`;

const OctberText1 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  right: 7%;
  top: 175vh;
  letter-spacing: 3px;
`;

const NovemberImage1 = styled.div`
  position: absolute;
  top: -25vh;
  right: 0%;
  width: 70%;
  height: 20vh;
  background-color: #ddd;
`;

const NovemberImage2 = styled.div`
  position: absolute;
  top: 90vh;
  left: 3%;
  width: 40%;
  height: 30vh;
  background-color: #ddd;
`;

const NovemberText1 = styled.div`
  position: absolute;
  writing-mode: vertical-rl;
  text-align: start;
  font-size: 13px;
  top: 0vh;
  right: 15%;
  letter-spacing: 3px;
`;

const DecemberImage1 = styled.div`
  position: absolute;
  top: -30vh;
  left: 5%;
  width: 90%;
  height: 35vh;
  background-color: #ddd;
`;

const DecemberText1 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  top: 10vh;
  right: 12%;
  letter-spacing: 3px;
`;

const JanuaryImage1 = styled.div`
  position: absolute;
  top: 70vh;
  left: 5%;
  width: 55%;
  height: 30vh;
  background-color: #ddd;
`;

const JanuaryText1 = styled.div`
  position: absolute;
  writing-mode: vertical-rl;
  text-align: start;
  font-size: 13px;
  top: -30vh;
  right: 12%;
  letter-spacing: 3px;
`;
const FebruaryImage1 = styled.div`
  position: absolute;
  top: 70vh;
  right: 5%;
  width: 50%;
  height: 20vh;
  background-color: #ddd;
`;

const FebruaryImage2 = styled.div`
  position: absolute;
  top: -30vh;
  left: 0%;
  width: 35%;
  height: 30vh;
  background-color: #ddd;
`;

const FebruaryText1 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  top: -15vh;
  right: 0%;
  letter-spacing: 3px;
`;

const MarchImage1 = styled.div`
  position: absolute;
  top: -100vh;
  left: 3%;
  width: 45%;
  height: 40vh;
  background-color: #ddd;
`;

const MarchImage2 = styled.div`
  position: absolute;
  top: -100vh;
  right: 3%;
  width: 45%;
  height: 20vh;
  background-color: #ddd;
`;

const MarchImage3 = styled.div`
  position: absolute;
  top: -75vh;
  right: 3%;
  width: 45%;
  height: 20vh;
  background-color: #ddd;
`;

const MarchText1 = styled.div`
  position: absolute;
  text-align: start;
  font-size: 13px;
  left: 7%;
  top: -50vh;
  letter-spacing: 3px;
`;

const FooterText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 15px;
  paddingfont-family: ヒラギノ明朝 ProN;
  top: 1085vh;
  width: 90%;
  left: 5%;
  right: 5%;
  // background-color:#ddd;
  height: 12vh;
`;
const Content = styled.div`
  margin-top: 1.5vh;
`;

export default Events;
