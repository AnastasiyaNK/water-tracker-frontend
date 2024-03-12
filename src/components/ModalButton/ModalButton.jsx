import { StyledModalButton } from "./ModalButton.styled";
import { useDispatch } from "react-redux";
import { setAddWaterModal } from "../../redux/modal/modalsReduser";
import { ReactComponent as IconPlus } from "../../assets/icons/plus-circle.svg";
import { useTranslation } from "react-i18next";

const ModalButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <StyledModalButton onClick={() => dispatch(setAddWaterModal(true))}>
      <IconPlus />
      {t("AddWater")}
    </StyledModalButton>
  );
};

export default ModalButton;
