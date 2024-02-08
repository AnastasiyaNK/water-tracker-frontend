import { useDispatch } from "react-redux";
import { setAddWaterModal } from "../../../redux/modal/modalsReduser";

const AddWaterButton = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(setAddWaterModal(true))}
        style={props.style}
      >
        <p>+ Add Water</p>
      </button>
    </div>
  );
};

export default AddWaterButton;
