import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";

const Top: React.FC = props => {
  const [swipeableActions, setSwipeableActions] = React.useState();
  const [tabIndex, setTabIndex] = React.useState(0);
  const items = ["B", "L", "U"];
  const itemNames = ["シュークリーム", "チョコレートケーキ", "ミルクプリン"];

  const handleChange = index => {
    setTabIndex(index);
  };
  const TabChange = () => {
    setTabIndex(0);
  };
  return (
    <>
      {
        <div>
          <ol>
            {itemNames.map((itemName, i) => (
              <li
                value={tabIndex}
                onClick={TabChange}
                // className={tabIndex === i && classes[`active${i}`]}
                // label={itemName}
              >
                {itemName}
              </li>
            ))}
          </ol>
          <SwipeableViews
            action={actions => setSwipeableActions(actions)}
            index={tabIndex}
            onChangeIndex={index => handleChange(index)}
          >
            {items.map((item, index) => (
              // <div className={classes[`slide${index}`]}>
              <Test>{item}</Test>
              // </div>
            ))}
          </SwipeableViews>
        </div>
      }
    </>
  );
};

// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `
const SampleBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Test = styled.div`
  height: 100px;
  width: 100%;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default Top;
