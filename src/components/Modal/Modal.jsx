import { useEffect } from "react";
import { StyledModalBackdrop } from "./ModalStyled";
import { useDispatch } from "react-redux";
import { closeAllModals } from "../../redux/modal/modalsReduser";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import { ReactComponent as IconClose } from "../../assets/icons/close.svg";

const Modal = ({ children, title, styledClass }) => {
  const dispatch = useDispatch();
  const modalElement = document.getElementsByClassName(`${styledClass}`);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeAllModals());
    }
  };

  useEffect(() => {
    const handleEscapeClick = (event) => {
      if (event.code === "Escape") {
        dispatch(closeAllModals());
      }
    };

    window.addEventListener("keydown", handleEscapeClick);
    disableBodyScroll(modalElement[0]);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
      clearAllBodyScrollLocks();
    };
  }, [dispatch, modalElement]);

  return (
    <StyledModalBackdrop onClick={handleOverlayClick}>
      <div className={`${styledClass} scrollbarr-settings`}>
        <h2 className="title">{title}</h2>
        <button
          className="close-btn"
          type="button"
          onClick={() => {
            dispatch(closeAllModals());
          }}
        >
          <IconClose className="close-btn-svg" />
        </button>
        {children}
      </div>
    </StyledModalBackdrop>
  );
};

export default Modal;
