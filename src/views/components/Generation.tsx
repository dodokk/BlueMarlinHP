import React, { useState } from "react";
import styled from "styled-components";
import MemberInfoLeft from "./MemberInfoLeft";
import MemberInfoRight from "./MemberInfoRight";
import history from "../../utils/history";

interface Props {
  number: number;
  text: any;
  member: {
    member1: { name: string; picture: any; profile: string; doc: any };
    member2: { name: string; picture: any; profile: string; doc: any };
    member3: { name: string; picture: any; profile: string; doc: any };
    member4: { name: string; picture: any; profile: string; doc: any };
    member5: { name: string; picture: any; profile: string; doc: any };
    member6: { name: string; picture: any; profile: string; doc: any };
    member7: { name: string; picture: any; profile: string; doc: any };
    member8: { name: string; picture: any; profile: string; doc: any };
    member9: { name: string; picture: any; profile: string; doc: any };
    member10: { name: string; picture: any; profile: string; doc: any };
    member11: { name: string; picture: any; profile: string; doc: any };
    member12: { name: string; picture: any; profile: string; doc: any };
    member13: { name: string; picture: any; profile: string; doc: any };
    member14: { name: string; picture: any; profile: string; doc: any };
    member15: { name: string; picture: any; profile: string; doc: any };
    member16: { name: string; picture: any; profile: string; doc: any };
  };
}
const Generation: React.FC<Props> = props => {
  const gotoMember = () => {
    history.push("/Member");
  };
  if (props.member.member16.name === "") {
    return (
      <SampleBox>
        <Button onClick={gotoMember}>←</Button>
        <Th>{props.number}th</Th>
        <MemberBox>
          <Sex>Mens</Sex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member1.picture}
              name={props.member.member1.name}
              profile={props.member.member1.profile}
              text={props.member.member1.doc}
            />

            <MemberInfoRight
              picture={props.member.member2.picture}
              name={props.member.member2.name}
              profile={props.member.member2.profile}
              text={props.member.member2.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member3.picture}
              name={props.member.member3.name}
              profile={props.member.member3.profile}
              text={props.member.member3.doc}
            />
            <MemberInfoRight
              picture={props.member.member4.picture}
              name={props.member.member4.name}
              profile={props.member.member4.profile}
              text={props.member.member4.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member5.picture}
              name={props.member.member5.name}
              profile={props.member.member5.profile}
              text={props.member.member5.doc}
            />
            <MemberInfoRight
              picture={props.member.member6.picture}
              name={props.member.member6.name}
              profile={props.member.member6.profile}
              text={props.member.member6.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member7.picture}
              name={props.member.member7.name}
              profile={props.member.member7.profile}
              text={props.member.member7.doc}
            />
            <MemberInfoRight
              picture={props.member.member8.picture}
              name={props.member.member8.name}
              profile={props.member.member8.profile}
              text={props.member.member8.doc}
            />
          </Flex>
        </MemberBox>
        <div>
          <Sex>Women's</Sex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member9.picture}
              name={props.member.member9.name}
              profile={props.member.member9.profile}
              text={props.member.member9.doc}
            />
            <MemberInfoRight
              picture={props.member.member10.picture}
              name={props.member.member10.name}
              profile={props.member.member10.profile}
              text={props.member.member10.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member11.picture}
              name={props.member.member11.name}
              profile={props.member.member11.profile}
              text={props.member.member11.doc}
            />
            <MemberInfoRight
              picture={props.member.member12.picture}
              name={props.member.member12.name}
              profile={props.member.member12.profile}
              text={props.member.member12.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member13.picture}
              name={props.member.member13.name}
              profile={props.member.member13.profile}
              text={props.member.member13.doc}
            />
            <MemberInfoRight
              picture={props.member.member14.picture}
              name={props.member.member14.name}
              profile={props.member.member14.profile}
              text={props.member.member14.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member15.picture}
              name={props.member.member15.name}
              profile={props.member.member15.profile}
              text={props.member.member15.doc}
            />
          </Flex>
        </div>

        <Text>{props.text}</Text>
      </SampleBox>
    );
  } else {
    return (
      <SampleBox>
        <Button onClick={gotoMember}>←</Button>
        <Th>{props.number}th</Th>
        <MemberBox>
          <Sex>Mens</Sex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member1.picture}
              name={props.member.member1.name}
              profile={props.member.member1.profile}
              text={props.member.member1.doc}
            />
            <MemberInfoRight
              picture={props.member.member2.picture}
              name={props.member.member2.name}
              profile={props.member.member2.profile}
              text={props.member.member2.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member3.picture}
              name={props.member.member3.name}
              profile={props.member.member3.profile}
              text={props.member.member3.doc}
            />
            <MemberInfoRight
              picture={props.member.member4.picture}
              name={props.member.member4.name}
              profile={props.member.member4.profile}
              text={props.member.member4.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member5.picture}
              name={props.member.member5.name}
              profile={props.member.member5.profile}
              text={props.member.member5.doc}
            />
            <MemberInfoRight
              picture={props.member.member6.picture}
              name={props.member.member6.name}
              profile={props.member.member6.profile}
              text={props.member.member6.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member7.picture}
              name={props.member.member7.name}
              profile={props.member.member7.profile}
              text={props.member.member7.doc}
            />
            <MemberInfoRight
              picture={props.member.member8.picture}
              name={props.member.member8.name}
              profile={props.member.member8.profile}
              text={props.member.member8.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member9.picture}
              name={props.member.member9.name}
              profile={props.member.member9.profile}
              text={props.member.member9.doc}
            />
          </Flex>
        </MemberBox>
        <div>
          <Sex>Women's</Sex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member10.picture}
              name={props.member.member10.name}
              profile={props.member.member10.profile}
              text={props.member.member10.doc}
            />
            <MemberInfoRight
              picture={props.member.member11.picture}
              name={props.member.member11.name}
              profile={props.member.member11.profile}
              text={props.member.member11.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member12.picture}
              name={props.member.member12.name}
              profile={props.member.member12.profile}
              text={props.member.member12.doc}
            />

            <MemberInfoRight
              picture={props.member.member13.picture}
              name={props.member.member13.name}
              profile={props.member.member13.profile}
              text={props.member.member13.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member14.picture}
              name={props.member.member14.name}
              profile={props.member.member14.profile}
              text={props.member.member14.doc}
            />
            <MemberInfoRight
              picture={props.member.member15.picture}
              name={props.member.member15.name}
              profile={props.member.member15.profile}
              text={props.member.member15.doc}
            />
          </Flex>
          <Flex>
            <MemberInfoLeft
              picture={props.member.member16.picture}
              name={props.member.member16.name}
              profile={props.member.member16.profile}
              text={props.member.member16.doc}
            />
          </Flex>
        </div>
        <>
          <Text>{props.text}</Text>
        </>
      </SampleBox>
    );
  }
};

// cssを適用するときは↓で定義し、returnの中でオリジナルタグとして使う
// propsを持たせることも可能(詳しくはstyled-componentで検索)

// const {オリジナルのタグ名} = styled.{ベースとなるタグ名}`
//   {適用したいCSS};
// `

const SampleBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: #faf8f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Th = styled.div`
  font-size: 45px;
  margin-right: 60%;
  font-family: "ヒラギノ明朝 ProN W6";
  font-weight: lighter;
`;
const Sex = styled.div`
  font-size: 25px;
  text-align: center;
  font-family: serif;
  text-decoration: underline;
  margin: 5%;
`;

const Flex = styled.div`
  display: flex;
`;
const MemberBox = styled.div`
  margin-bottom: 20%;
`;

const Text = styled.div`
  margin: 25% 3% 0%;
  font-size: 15px;
  paddingfont-family: ヒラギノ明朝 ProN;
`;
const Button = styled.button`
  margin-right: 75%;
  font-size: 45px;
  font-family: "ヒラギノ明朝 ProN";
`;
export default Generation;
