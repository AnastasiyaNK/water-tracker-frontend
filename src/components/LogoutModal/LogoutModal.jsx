import { Modal } from "components";
import React from "react";
import { StyledLogoutModal } from "./LogoutModal.styled";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userSlice";

const LogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  return (
    <Modal title="Lod out" styledClass="logout-modal">
      <StyledLogoutModal>
        <p className="text">Do you really want to leave?</p>
        <div className="wrapper-btn">
          <button className="cancel-btn">Cancel</button>
          <button
            onClick={() => {
              dispatch(logoutUser());
            }}
            className="logout-btn"
          >
            Log out
          </button>
        </div>
      </StyledLogoutModal>
    </Modal>
  );
};

export default LogoutModal;
