import { useDispatch, useSelector } from "react-redux";
import { AddWaterButton } from "../../index";
import { selectNotes } from "../../../redux/water/waterSelectors";
import { getLocaleTime } from "services/getLocaleTime";
import {
  setDeleteModal,
  setEditModal,
} from "../../../redux/modal/modalsReduser";
import {
  Ml,
  Portion,
  Time,
  Edit,
  PortionsList,
  Button,
  Portions,
} from "./WaterPortionsList.styled";

import { ReactComponent as IconGlass } from "../../../assets/icons/glass.svg";
import { ReactComponent as IconPencil } from "../../../assets/icons/pencil-square.svg";
import { ReactComponent as IconBasket } from "../../../assets/icons/basket.svg";

const WaterPortionsList = () => {
  const dispatch = useDispatch();
  const waterPortions = useSelector(selectNotes);

  return (
    <PortionsList>
      {waterPortions.length === 0 ? (
        <p className="motivation">Start your day - just add water</p>
      ) : (
        <>
          <Portions>
            {waterPortions?.map((item) => (
              <Portion key={item._id}>
                <IconGlass className="icon-glass" />
                <Ml>{`${item.waterAmount} ml`} </Ml>
                <Time>
                  {getLocaleTime(item.date)}
                  {/* {format(item.date, "HH")}:{format(item.date, "mm")}{" "}
                {format(item.date, "a")}  */}
                </Time>
                <Edit>
                  <Button
                    onClick={() =>
                      dispatch(
                        setEditModal({
                          isOpenModal: true,
                          waterPortionId: item._id,
                        })
                      )
                    }
                  >
                    <IconPencil />
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(
                        setDeleteModal({ isOpen: true, portionId: item._id })
                      );
                    }}
                  >
                    <IconBasket />
                  </Button>
                </Edit>
              </Portion>
            ))}
          </Portions>
          <AddWaterButton />
        </>
      )}
    </PortionsList>
  );
};
export default WaterPortionsList;
