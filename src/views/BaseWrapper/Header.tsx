import React, { useState } from "react";
import history from "../../utils/history";
import styled from "styled-components";
import TwitterIcon from "../images/twitter.png";
import InstagramIcon from "../images/instagram.png";
import LineIcon from "../images/line.png";

const Header: React.FC = props => {
  // コンポーネントが状態を持つときは↓を使う
  // const [状態変数, 状態変数を変更する関数] = useState(初期値);
  const [isSelected, setIsSelected] = useState(true);

  const gotoTop = () => {
    history.push("/");
  };
  const gotoAboutUs = () => {
    history.push("/Aboutus");
  };
  const gotoEvents = () => {
    history.push("/Events");
  };
  const gotoMember = () => {
    history.push("/Member");
  };
  const gotoGallary = () => {
    history.push("/Gallery");
  };
  const gotoQandA = () => {
    history.push("/QandA");
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      {
        /* ここにjsx(html的なやつ)を書く */
        <Menu>
          <BtnTrigger onClick={handleClick} isSelected={isSelected}>
            <span></span>
            <span></span>
            <span></span>
          </BtnTrigger>
          <MenuModal isSelected={isSelected}>
            <MenuTitle>Menu</MenuTitle>
            <MenuTop isSelected={isSelected} onClick={gotoTop}>
              Top
            </MenuTop>
            <MenuAboutUs isSelected={isSelected} onClick={gotoAboutUs}>
              AboutUs
            </MenuAboutUs>
            <MenuEvents isSelected={isSelected} onClick={gotoEvents}>
              Events
            </MenuEvents>
            <MenuMember isSelected={isSelected} onClick={gotoMember}>
              Member
            </MenuMember>
            <MenuGallary isSelected={isSelected} onClick={gotoGallary}>
              Gallary
            </MenuGallary>
            <MenuQandA isSelected={isSelected} onClick={gotoQandA}>
              Q&A
            </MenuQandA>
            <Sns>
              <Twitter>
                <a href="https://mobile.twitter.com/bluemarlin1996">
                  <Icon src={TwitterIcon}></Icon>
                </a>
              </Twitter>
              <Instagram>
                <a href="https://www.instagram.com/bluemarlin2020/?hl=ja">
                  <Icon src={InstagramIcon}></Icon>
                </a>
              </Instagram>
              <Line>
                <a href="https://lin.ee/rvBRrW4">
                  <Icon src={LineIcon}></Icon>
                </a>
              </Line>
            </Sns>
          </MenuModal>
        </Menu>
      }
    </>
  );
};

// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// const handleClick = () => {
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `
const Menu = styled.div``;
const BtnTrigger = styled.div<{ isSelected: boolean }>`
  position: absolute;
  position: fixed;
  width: 50px;
  height: 50px;
  cursor: pointer;
  right: 30px;
  top: 30px;
  display: inline-block;
  transition: all 2s;
  box-sizing: border-box;
  z-index: 100;
  border-radius: 5px;
  background-color: #ddd;
  opacity: 0.6;
  span {
    position: absolute;
    left: 10px;
    width: 60%;
    height: 2px;
    background-color: black;
    border-radius: 1px;
    transition: all 0.5s;
  }
  span:nth-of-type(1) {
    top: 14px;
    transform: ${({ isSelected }) =>
      isSelected ? "" : "translateY(10.5px) rotate(-45deg)"};
  }
  span:nth-of-type(2) {
    top: 24px;
    opacity: ${({ isSelected }) => (isSelected ? "1" : "0")};
  }
  span:nth-of-type(3) {
    bottom: 14px;
    transform: ${({ isSelected }) =>
      isSelected ? "" : "translateY(-10.5px) rotate(45deg);"};
  }
`;

const MenuModal = styled.div<{ isSelected: boolean }>`
  position: absolute;
  position: fixed;
  background-color: #777777;
  opacity: ${({ isSelected }) => (isSelected ? "0;" : "0.9;")};
  height: 1000px;
  width: 100%;
  z-index: ${({ isSelected }) => (isSelected ? "0;" : "99")};
  transform: ${({ isSelected }) => (isSelected ? "translateX(-100%);" : "")};
  transition: all 0.5s;
`;
const MenuTitle = styled.div`
  color: #c3bebe;
  font-size: 20px;
  font-family: ヒラギノ明朝 ProN;
  // text-decoration: underline;
  position: absolute;
  left: 44px;
  top: 92px;
`;
const MenuTop = styled.div<{ isSelected: boolean }>`
  color: #fff;
  font-size: 30px;
  font-family: ヒラギノ明朝 ProN;
  position: absolute;
  left: 44px;
  top: 148px;
  height: 35px;
  width: ${({ isSelected }) => (isSelected ? "0px;" : "135px")};
  transition: all 1.5s;
  border-bottom: solid 2px #fff;
`;
const MenuAboutUs = styled.div<{ isSelected: boolean }>`
  color: #fff;
  font-size: 30px;
  font-family: ヒラギノ明朝 ProN;
  position: absolute;
  left: 44px;
  top: 194px;
  height: 35px;
  width: ${({ isSelected }) => (isSelected ? "0px;" : "135px")};
  transition: all 1.5s;
  border-bottom: solid 2px #fff;
`;
const MenuEvents = styled.div<{ isSelected: boolean }>`
  color: #fff;
  font-size: 30px;
  font-family: ヒラギノ明朝 ProN;
  position: absolute;
  left: 44px;
  top: 238px;
  height: 35px;
  width: ${({ isSelected }) => (isSelected ? "0px;" : "135px")};
  transition: all 1.5s;
  border-bottom: solid 2px #fff;
`;
const MenuMember = styled.div<{ isSelected: boolean }>`
  color: #fff;
  font-size: 30px;
  font-family: ヒラギノ明朝 ProN;
  position: absolute;
  left: 44px;
  top: 282px;
  height: 35px;
  width: ${({ isSelected }) => (isSelected ? "0px;" : "135px")};
  transition: all 1.5s;
  border-bottom: solid 2px #fff;
`;
const MenuGallary = styled.div<{ isSelected: boolean }>`
  color: #fff;
  font-size: 30px;
  font-family: ヒラギノ明朝 ProN;
  position: absolute;
  left: 44px;
  top: 326px;
  height: 35px;
  width: ${({ isSelected }) => (isSelected ? "0px;" : "135px")};
  transition: all 1.5s;
  border-bottom: solid 2px #fff;
`;
const MenuQandA = styled.div<{ isSelected: boolean }>`
  color: #fff;
  font-size: 30px;
  font-family: ヒラギノ明朝 ProN;
  position: absolute;
  left: 44px;
  top: 370px;
  height: 35px;
  width: ${({ isSelected }) => (isSelected ? "0px;" : "135px")};
  transition: all 1.5s;
  border-bottom: solid 2px #fff;
`;
const Sns = styled.div`
  position: absolute;
  width: 90%;
  height: 100px;
  border-top: solid 1px #c3bebe;
  top: 500px;
  left: 15px;
`;
const Twitter = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 10px;
`;
const Instagram = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 80px;
`;
const Line = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: 150px;
`;
const Icon = styled.img`
  max-width: 100%;
  height: auto;
  width/***/: auto;
  opacity: 0.7;
`;

export default Header;
