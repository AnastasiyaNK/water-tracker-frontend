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
  // ScrollableDiv,
  Button,
  Portions,
  // Motivation,
} from "./WaterPortionsList.styled";

import { ReactComponent as Glass } from "../../../assets/icons/glass-desc.svg";
import { ReactComponent as Pencil } from "../../../assets/icons/pencil-square.svg";
import { ReactComponent as Bucket } from "../../../assets/icons/bucket.svg";

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
                <Glass />
                <Ml>{item.waterAmount}ml</Ml>
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
                    <Pencil />
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(
                        setDeleteModal({ isOpen: true, portionId: item._id })
                      );
                    }}
                  >
                    <Bucket />
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
