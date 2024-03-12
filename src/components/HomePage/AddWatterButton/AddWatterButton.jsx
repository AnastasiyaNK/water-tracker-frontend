import { useDispatch } from "react-redux";
import { setAddWaterModal } from "../../../redux/modal/modalsReduser";
import { StyledAddWatterBtn } from "./AddWatterButton.styled";
import { ReactComponent as IconPlus } from "../../../assets/icons/plus-small.svg";
import { useTranslation } from "react-i18next";

const AddWaterButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <StyledAddWatterBtn onClick={() => dispatch(setAddWaterModal(true))}>
      <IconPlus />
      {t("AddWater")}
    </StyledAddWatterBtn>
  );
};

export default AddWaterButton;
