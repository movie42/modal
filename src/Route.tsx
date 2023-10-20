import { useState } from "react";
import { useModal } from "./Modal";
import ModalContainer from "./ModalContainer";

const Route = () => {
  const [saveSomething] = useState("save");
  const [deleteSomething] = useState("delete");
  const { openModal } = useModal();

  const saveSomethingMutate = () => {
    console.log(saveSomething);
  };
  const deleteSomethingMutate = () => {
    console.log(deleteSomething);
  };

  const handleSaveSomething = () => {
    openModal("saveSomething", saveSomethingMutate);
  };
  const handleDeleteSomething = () => {
    openModal("deleteSomething", deleteSomethingMutate);
  };
  return (
    <div>
      <button onClick={handleSaveSomething}>저장</button>
      <button onClick={handleDeleteSomething}>삭제</button>
      <ModalContainer />
    </div>
  );
};

export default Route;
