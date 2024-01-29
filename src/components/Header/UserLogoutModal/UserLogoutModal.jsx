import {
  CloseBtn,
  DivLogoutBtn,
  ModalLogout,
  ModalHead,
  ModalHeader,
  SmaleLogoutHeader,
  ModalOverlay,
} from "./UserLogoutModal.styled";
import icons from "../../../assets/icons/closeBtn.svg";
import { useDispatch } from "react-redux";

import { useEffect } from "react";

export const UserLogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const close = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={onClose}>
          <ModalLogout onClick={(e) => e.stopPropagation()}>
            <ModalHead>
              <ModalHeader>Log out</ModalHeader>
              <CloseBtn onClick={onClose}>
                <img src={icons} alt="close" />
              </CloseBtn>
            </ModalHead>

            <SmaleLogoutHeader>Do you really want to leave?</SmaleLogoutHeader>
            <DivLogoutBtn>
              <button onClick={() => dispatch()}>Log out</button>
              <button onClick={onClose}>Cancel</button>
            </DivLogoutBtn>
          </ModalLogout>
        </ModalOverlay>
      )}
    </>
  );
};
