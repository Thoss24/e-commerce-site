import { ReactNode, createContext, useState } from "react";
import modalContextActions from "./modal";

interface Props {
  children: ReactNode;
}

export const ModalContext = createContext(modalContextActions);

const ModalContextProvider = ({ children }: Props) => {
  const [cartDisplaying, setCartDisplaying] = useState(false);

  const modalContextState = {
    cartDisplaying: cartDisplaying,
    setCartDisplaying: setCartDisplaying,
  }

  return <ModalContext.Provider value={modalContextState}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
