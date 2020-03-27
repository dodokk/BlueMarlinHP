import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import TopB from "../images/Top/Top-B.jpg";
import TopL from "../images/Top/Top-L.jpg";
import TopU from "../images/Top/Top-U.jpg";
import TopE from "../images/Top/Top-E.jpg";
import TopM from "../images/Top/Top-M.jpg";
import TopA from "../images/Top/Top-A.jpg";
import TopR from "../images/Top/Top-R.jpg";
import TopL2 from "../images/Top/Top-L2.jpg";
import TopI from "../images/Top/Top-I.jpg";
import TopN from "../images/Top/Top-N.jpg";
import Header from "../BaseWrapper/Header";

const Top: React.FC = props => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const items = [TopB, TopL, TopU, TopE, TopM, TopA, TopR, TopL2, TopI, TopN];
  const bgTexts = ["B", "L", "U", "E", "M", "A", "R", "L", "I", "N"];
  const texts = [
    "Blue",
    "Liberty",
    "Unity",
    "Eternal",
    "Matey",
    "Aeonian",
    "Rarity",
    "Legend",
    "Invaluable",
    "Nostalgia"
  ];

  const handleChange = index => {
    setTabIndex(index);
  };
  const TabChange0 = () => {
    setTabIndex(0);
  };
  const TabChange1 = () => {
    setTabIndex(1);
  };
  const TabChange2 = () => {
    setTabIndex(2);
  };
  const TabChange3 = () => {
    setTabIndex(3);
  };
  const TabChange4 = () => {
    setTabIndex(4);
  };
  const TabChange5 = () => {
    setTabIndex(5);
  };
  const TabChange6 = () => {
    setTabIndex(6);
  };
  const TabChange7 = () => {
    setTabIndex(7);
  };
  const TabChange8 = () => {
    setTabIndex(8);
  };
  const TabChange9 = () => {
    setTabIndex(9);
  };
  return (
    <>
      {
        <div>
          <Header />
          <Tabs>
            <Tab
              onClick={TabChange0}
              style={tabIndex === 0 ? { color: "#000" } : { color: "#fff" }}
            >
              B
            </Tab>
            <Tab
              onClick={TabChange1}
              style={tabIndex === 1 ? { color: "#000" } : { color: "#fff" }}
            >
              L
            </Tab>
            <Tab
              onClick={TabChange2}
              style={tabIndex === 2 ? { color: "#000" } : { color: "#fff" }}
            >
              U
            </Tab>
            <Tab
              onClick={TabChange3}
              style={tabIndex === 3 ? { color: "#000" } : { color: "#fff" }}
            >
              E
            </Tab>
            <br />
            <Tab
              onClick={TabChange4}
              style={tabIndex === 4 ? { color: "#000" } : { color: "#fff" }}
            >
              M
            </Tab>
            <Tab
              onClick={TabChange5}
              style={tabIndex === 5 ? { color: "#000" } : { color: "#fff" }}
            >
              A
            </Tab>
            <Tab
              onClick={TabChange6}
              style={tabIndex === 6 ? { color: "#000" } : { color: "#fff" }}
            >
              R
            </Tab>
            <Tab
              onClick={TabChange7}
              style={tabIndex === 7 ? { color: "#000" } : { color: "#fff" }}
            >
              L
            </Tab>
            <Tab
              onClick={TabChange8}
              style={tabIndex === 8 ? { color: "#000" } : { color: "#fff" }}
            >
              I
            </Tab>
            <Tab
              onClick={TabChange9}
              style={tabIndex === 9 ? { color: "#000" } : { color: "#fff" }}
            >
              N
            </Tab>
          </Tabs>
          <SwipeableViews
            index={tabIndex}
            onChangeIndex={index => handleChange(index)}
            style={{ height: "100vh" }}
          >
            {items.map((item, index) => (
              <Screen>
                {/* // <div className={classes[`slide${index}`]}> */}
                {/* // <Test>{item}</Test> */}
                <Filter></Filter>
                <Img src={item} />
                <SlideLetterBg
                  style={{ backgroundImage: `url(${items[index]})` }}
                >
                  {bgTexts[index]}
                </SlideLetterBg>
                <SlideLetter>{texts[index]}</SlideLetter>
                {/* // </div> */}
              </Screen>
            ))}
          </SwipeableViews>
        </div>
      }
    </>
  );
};

const Screen = styled.div`
  width: 100%;
  height: 100vh;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: rgba(11, 15, 39, 0.83);
`;
const Tabs = styled.ol`
  position: absolute;
  padding: 0;
  z-index: 5;
  left: 20%;
  right: 20%;
  bottom: 100px;
  font-family: "Open Sans", sans-serif;

  // right: 0;
  text-align: center;
`;
const Tab = styled.li`
  list-style: none;
  display: inline-block;
  margin: 7px;
  font-size: 30px;
  font-weight: 500;
  color: black;
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
`;
const SlideLetterBg = styled.div`
  position: absolute;
  text-align: center;
  line-height: 100vh;
  top: 0;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  height: 100%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 50vw;
  font-weight: 800;
  color: #ddd;
  z-index: 3;
  background-position: center;
  background-size: cover;
`;
const SlideLetter = styled.div`
  position: absolute;
  text-align: center;
  line-height: 100vh;
  top: 0;
  font-size: 6vw;
  font-weight: 800;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  height: 100%;
  z-index: 4;
  text-transform: uppercase;
  letter-spacing: 12px;
  color: #fff;
  will-change: transform;
`;
export default Top;
