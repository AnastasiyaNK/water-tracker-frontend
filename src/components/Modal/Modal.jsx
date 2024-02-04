import { useEffect } from "react";
import { ReactComponent as IconClose } from "../../assets/icons/close.svg";
import { StyledModalBackdrop } from "./ModalStyled";
import { useDispatch } from "react-redux";
import { closeAllModals } from "../../redux/modalsReduser";

const Modal = ({ children, title, styledClass }) => {
  const dispatch = useDispatch();

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

    document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", handleEscapeClick);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
      document.body.style.overflowY = "visible";
    };
  }, [dispatch]);

  return (
    <StyledModalBackdrop onClick={handleOverlayClick}>
      <div className={styledClass}>
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
