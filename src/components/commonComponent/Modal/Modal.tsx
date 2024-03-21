import ModalPortal from "./ModalPortal";
import style from "./Modal.module.scss";
import { close } from "../../../assets/images";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  handleShowModal: () => void;
};

const Modal = ({ children, handleShowModal }: Props) => {
  const handleEscape = (event: KeyboardEvent) => {
    if(event.key === "Escape"){
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
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
