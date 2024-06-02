import React from "react";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

const ModalPortal = ({ children }: Props) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    throw new Error(
      "Modal root element not found. Make sure you have a <div id='modal-root'></div> in your HTML."
    );
  }
  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalPortal;
