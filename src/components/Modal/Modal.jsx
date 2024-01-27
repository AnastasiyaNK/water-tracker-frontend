import React from "react";
import "./Modal.css";
const Modal = ({ active, SetActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => SetActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
