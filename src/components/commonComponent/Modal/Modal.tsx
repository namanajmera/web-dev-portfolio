import ModalPortal from "./ModalPortal";
import style from "./Modal.module.scss";
import { close } from "../../../assets/images";
import React, { useEffect, ReactElement  } from "react";

type ChildProps = {
  modalData?: any;
};
type Props = {
  children: ReactElement<ChildProps> | ReactElement<ChildProps>[];
  handleShowModal: () => void;
  modalData: any;
};


const Modal = ({ children, handleShowModal, modalData }: Props) => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleShowModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { modalData });
    }
    return child;
  });

  return (
    <ModalPortal>
      <div className={style["modal-overlay"]}>
        <div className={style["modal"]}>
          <img
            src={close}
            alt=""
            className={style["close"]}
            onClick={handleShowModal}
          />
          {enhancedChildren}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
