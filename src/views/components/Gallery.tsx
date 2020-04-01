import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";

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
    <>
      <Header />
      <Temp>現在開発中です🙇‍♂️</Temp>
      {/* <Footer /> */}
    </>
  );
};

// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `
const Temp = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Gallery;
