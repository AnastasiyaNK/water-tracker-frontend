import { useDispatch } from "react-redux";
import { setAddWaterModal } from "../../../redux/modal/modalsReduser";
import { StyledAddWatterBtn } from "./AddWatterButton.styled";
import { ReactComponent as IconPlus } from "../../../assets/icons/plus-small.svg";

const AddWaterButton = () => {
  const dispatch = useDispatch();

  // const buttonStyle = {
  //   display: "inline-flex",
  //   top: "25px",
  //   width: "114px",
  //   height: "24px",
  //   marginTop: "12px",
  //   color: "var(--Primery-Color-Blue, #407bff)",
  //   fontFamily: "Roboto",
  //   fontSize: "18px",
  //   fontStyle: "normal",
  //   fontWeight: "500",
  //   lineHeight: "24px",
  //   background: "none",
  //   border: "none",
  // };

  return (
    <StyledAddWatterBtn onClick={() => dispatch(setAddWaterModal(true))}>
      <IconPlus />
      Add Water
    </StyledAddWatterBtn>
  );
};

export default AddWaterButton;
