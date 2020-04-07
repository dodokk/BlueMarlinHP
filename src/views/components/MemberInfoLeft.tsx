import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

interface Props {
  name: string;
  picture: any;
  profile: string;
  text: any;
}
const MemberInfoLeft: React.FC<Props> = props => {
  const ModalstyleLeft = {
    content: {
      outline: "none",
      backgroundColor: "#fff",
      paddingTop: "4%",
      borderRadius: 20,
      marginRight: "9%",
      marginLeft: "9%"
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.65)"
    }
  };

  const [modalIsOpen, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <MemberInfo>
        <Img src={props.picture} onClick={openModal} />
        <MemberName>{props.name}</MemberName>
      </MemberInfo>
      <Modal1
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalstyleLeft}
      >
        <BoxModal>
          <ImgModal src={props.picture} />
          <TextNameModal>{props.name}</TextNameModal>
          <TextNameBox>
            <TextModal>{props.profile}</TextModal>
          </TextNameBox>
          <TextNameBox>
            <TextModal>{props.text}</TextModal>
          </TextNameBox>
        </BoxModal>
      </Modal1>
    </>
  );
};

const SampleBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 132px;
  height: 132px;
  border: solid 1px black;
  padding: 6px;
`;

const MemberName = styled.div`
  font-family: ヒラギノ明朝 ProN;
  font-size: 25px;
`;
const MemberInfo = styled.div`
  display: block;
  text-align: center;
  margin-right: 15px;
  margin-bottom: 20px;
  font-family: ヒラギノ明朝 ProN;
`;
const Modal1 = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -50%);
`;
const ImgModal = styled.img`
  width: 274px;
  height: 258px;
  border-radius: 20px;
  margin-bottom: 4%;
`;
const TextNameModal = styled.div`
  font-size: 16px;
  font-family: "ヒラギノ丸ゴ ProN";
`;
const TextNameBox = styled.div`
  margin-top: 4%;
`;
const TextModal = styled.div`
  font-size: 10px;
  font-family: "ヒラギノ丸ゴ ProN";
`;
const BoxModal = styled.div`
  width: 310px;
  height: 500px;
  text-align: center;
`;

export default MemberInfoLeft;
