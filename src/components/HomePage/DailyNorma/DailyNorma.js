import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUserDailyNorma } from "../../../redux/user/userSelectors.js";
import { setDailyNormaModal } from "../../../redux/modal/modalsReduser.js";
import { DailyNormaBox, EditWater, Edit, Water } from "./DailyNorma.styled";
import { useTranslation } from "react-i18next";

const DailyNorma = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch(setDailyNormaModal);
  const myDailyNorma = useSelector(selectUserDailyNorma);

  return (
    <DailyNormaBox $lng={i18n.language}>
      <p>{t("DailyNorma")}</p>
      <EditWater>
        <Water>{myDailyNorma}L</Water>
        <Edit onClick={() => dispatch(setDailyNormaModal(true))}>
          {t("Edit")}
        </Edit>
      </EditWater>
    </DailyNormaBox>
  );
};

export default DailyNorma;
