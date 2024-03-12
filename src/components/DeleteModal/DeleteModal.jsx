import { Modal } from "components";
import { StyledDeleteModal } from "./DeleteModal.styled";
import { useDispatch, useSelector } from "react-redux";
import { closeAllModals } from "../../redux/modal/modalsReduser";
import { apiDeleteWaterPortion } from "../../redux/water/waterSlice";
import { selectDeletingWaterPortionId } from "../../redux/modal/modalsSelectors";
import { useTranslation } from "react-i18next";

const DeleteModal = () => {
  const deletingModalWaterId = useSelector(selectDeletingWaterPortionId);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Modal title={t("deleteTitle")} styledClass="logout-modal">
      <StyledDeleteModal>
        <p className="text">{t("deleteQuestion")}</p>
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
              dispatch(apiDeleteWaterPortion(deletingModalWaterId))
                .unwrap()
                .then(() => dispatch(closeAllModals()));
            }}
            className="logout-btn"
          >
            {t("delete")}
          </button>
        </div>
      </StyledDeleteModal>
    </Modal>
  );
};

export default DeleteModal;
