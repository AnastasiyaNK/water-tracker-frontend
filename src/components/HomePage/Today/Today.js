import { useTranslation } from "react-i18next";
import { TodayBox, TodayStile } from "./Today.styled";
import { WaterPortionsList } from "components";

const Today = () => {
  const { t } = useTranslation();

  return (
    <TodayBox>
      <TodayStile>{t("today")}</TodayStile>
      <WaterPortionsList />
    </TodayBox>
  );
};

export default Today;
