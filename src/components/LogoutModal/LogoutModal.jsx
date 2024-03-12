import { Modal } from "components";
import { StyledLogoutModal } from "./LogoutModal.styled";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/user/userSlice";
import { closeAllModals } from "../../redux/modal/modalsReduser";
import { useTranslation } from "react-i18next";

const LogoutModal = () => {
  const dispatch = useDispatch();
   const { t } = useTranslation();

  return (
    <Modal title={t("logOutTitle")} styledClass="logout-modal">
      <StyledLogoutModal>
        <p className="text">{t("logOutQuestion")}</p>
        <div className="wrapper-btn">
          <button
            onClick={() => {
              dispatch(closeAllModals());
            }}
            className="cancel-btn"
          >
            {t("cancel")}
          </button>
          <button
            onClick={() => {
              dispatch(logoutUser());
            }}
            className="logout-btn"
          >
            {t("logOut")}
          </button>
        </div>
      </StyledLogoutModal>
    </Modal>
  );
};

export default LogoutModal;
