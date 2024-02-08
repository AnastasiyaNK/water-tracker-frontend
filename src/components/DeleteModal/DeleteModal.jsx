import { Modal } from "components";
import { StyledDeleteModal } from "./DeleteModal.styled";
import { useDispatch, useSelector } from "react-redux";
import { closeAllModals } from "../../redux/modal/modalsReduser";
import { apiDeleteWaterPortion } from "../../redux/water/waterSlice";
import { selectDeletingWaterPortionId } from "../../redux/modal/modalsSelectors";

const DeleteModal = () => {
  const deletingModalWaterId = useSelector(selectDeletingWaterPortionId);
  const dispatch = useDispatch();

  return (
    <Modal title="Delete entry" styledClass="logout-modal">
      <StyledDeleteModal>
        <p className="text">Do you really want to delete?</p>
        <div className="wrapper-btn">
          <button
            onClick={() => {
              dispatch(closeAllModals());
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              dispatch(apiDeleteWaterPortion(deletingModalWaterId))
                .unwrap()
                .then(() => dispatch(closeAllModals()));
            }}
            className="logout-btn"
          >
            Delete
          </button>
        </div>
      </StyledDeleteModal>
    </Modal>
  );
};

export default DeleteModal;
