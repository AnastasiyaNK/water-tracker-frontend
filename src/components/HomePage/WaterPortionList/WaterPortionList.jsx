import AddWaterButton from "../AddWatterButton/AddWatterButton";

import {
  Ml,
  Portion,
  Time,
  Edit,
  PortionsList,
  ScrollableDiv,
  Button,
  Portions,
  Motivation,
} from "./WaterPortionsList.styled";
import { ReactComponent as Glass } from "../../../assets/icons/glass-desc.svg";
import { ReactComponent as Pencil } from "../../../assets/icons/pencil-square.svg";
import { ReactComponent as Bucket } from "../../../assets/icons/bucket.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal, setEditModal } from "../../../redux/modalsReduser";
import { selectNotes } from "../../../redux/selectors";

import { getLocaleTime } from "helpers/getLocaleTime";

const WaterPortionsList = () => {
  const dispatch = useDispatch();
  const waterPortions = useSelector(selectNotes);

  const buttonStyle = {
    display: "inline-flex",
    top: "25px",
    width: "114px",
    height: "24px",
    marginTop: "12px",
    color: "var(--Primery-Color-Blue, #407bff)",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    background: "none",
    border: "none",
  };

  return (
    <PortionsList>
      <div>
        {waterPortions.length === 0 ? (
          <Motivation>
            <div className="motivation">Start your day - just add water</div>{" "}
          </Motivation>
        ) : (
          <ScrollableDiv>
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
          </ScrollableDiv>
        )}
      </div>
      <>
        <AddWaterButton style={buttonStyle} />
      </>
    </PortionsList>
  );
};
export default WaterPortionsList;
