import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import { RevealGlobalStyles } from "react-genie";
import Header from "./Header";
import Footer from "./Footer";

const BaseWrapper: React.FC = props => {
  // コンポーネントが状態を持つときは↓を使う
  // const [状態変数, 状態変数を変更する関数] = useState(初期値);
  // const [samplestate, setSamplestate] = useState("initial");

  // ページ遷移するときは↓を使う

  return (
    <>
      <RevealGlobalStyles />
      {props.children}
    </>
  );
};

const SampleBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default BaseWrapper;
