import { useEffect } from "react";
import { ReactComponent as IconClose } from "../../assets/icons/close.svg";
import { StyledModalBackdrop } from "./ModalStyled";

const Modal = ({ toggleModal, children, title }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal(false);
    }
  };
  useEffect(() => {
    const handleEscapeClick = (event) => {
      if (event.code === "Escape") {
        toggleModal(false);
      }
    };
    window.addEventListener("keydown", handleEscapeClick);
    return () => window.removeEventListener("keydown", handleEscapeClick);
  }, [toggleModal]);
  return (
    <StyledModalBackdrop onClick={handleOverlayClick}>
      <div className="settings-modal">
        <h2 className="title">{title}</h2>
        <button
          className="close-btn"
          type="button"
          onClick={() => toggleModal(false)}
        >
          <IconClose className="close-btn-svg" />
        </button>
        {children}
        {/* <button className="settings-submit-btn" type="submit">
          Save
        </button> */}
      </div>
    </StyledModalBackdrop>
  );
};

export default Modal;
