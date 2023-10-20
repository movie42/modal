import { ReactNode, createContext, useContext, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  key: string;
  callBack?: (props?: unknown) => void;
};
interface ModalContextProps {
  modalProps: ModalProps;
  openModal: (key: string, callBack: (props?: unknown) => void) => void;
  closeModal: () => void;
  confirmModal: () => void;
}
const ModalContext = createContext<ModalContextProps>(null!);

interface ModalProviderProps {
  children: ReactNode;
}

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalProps, setModalProps] = useState<ModalProps>({
    isOpen: false,
    key: "",
    callBack: () => {}
  });

  const openModal = (key: string, callBack: (props?: unknown) => void) => {
    setModalProps({ isOpen: true, key, callBack });
  };
  const closeModal = () => {
    setModalProps({ isOpen: false, key: "" });
  };
  const confirmModal = () => {
    if (modalProps.callBack) {
      modalProps.callBack();
    }

    setModalProps({ isOpen: false, key: "" });
  };

  const value = {
    modalProps,
    openModal,
    closeModal,
    confirmModal
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
