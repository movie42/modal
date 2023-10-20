import styled, { css } from "styled-components";
import { useModal } from "./Modal";

const ModalContainer = () => {
  return (
    <div>
      <SaveModal />
      <DeleteModal />
    </div>
  );
};

export default ModalContainer;

const DeleteModal = () => {
  const {
    closeModal,
    confirmModal,
    modalProps: { isOpen, key }
  } = useModal();
  const handleClose = () => {
    closeModal();
  };
  const handleSave = () => {
    confirmModal();
  };
  return (
    <Modal visible={isOpen && key === "deleteSomething"}>
      <ModalContent>
        <h1>무언가를 삭제하려고 합니다. 삭제 하시겠습니까?</h1>
        <button onClick={handleClose} className="cancel">
          취소
        </button>
        <button onClick={handleSave} className="save">
          저장
        </button>
      </ModalContent>
      <span className="dimmed" />
    </Modal>
  );
};

const SaveModal = () => {
  const {
    closeModal,
    confirmModal,
    modalProps: { isOpen, key }
  } = useModal();
  const handleClose = () => {
    closeModal();
  };
  const handleSave = () => {
    confirmModal();
  };
  return (
    <Modal visible={isOpen && key === "saveSomething"}>
      <ModalContent>
        <h1>무언가를 저장하려고 합니다. 하시겠습니까?</h1>
        <button onClick={handleClose} className="cancel">
          취소
        </button>
        <button onClick={handleSave} className="save">
          저장
        </button>
      </ModalContent>
      <span className="dimmed" />
    </Modal>
  );
};
const Modal = styled.div<{ visible: boolean }>`
  ${({ visible }) => {
    if (visible) {
      return css`
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
    return css`
      display: none;
    `;
  }}
  width:100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  span.dimmed {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  max-width: 40vh;
  max-height: 40vh;
  z-index: 3;
  button.save {
    background-color: blue;
  }
`;
