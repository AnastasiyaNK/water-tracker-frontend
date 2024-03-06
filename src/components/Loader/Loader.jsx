import { BallTriangle } from "react-loader-spinner";
import { StyledLoaderBackdrop } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderBackdrop>
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#407BFF"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoaderBackdrop>
  );
};

export default Loader;
