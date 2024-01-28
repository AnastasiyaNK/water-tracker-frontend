import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#407BFF"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
