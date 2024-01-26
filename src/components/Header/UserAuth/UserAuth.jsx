import Icons from "../../../assets/icons/user.svg";
import { WrapperSignin } from "./UserAuth.styled";

export const UserAuth = () => {
  return (
    <WrapperSignin to="/signin">
      <p>Sign in</p>
      <svg width="28" height="28">
        <use href={Icons}></use>
      </svg>
    </WrapperSignin>
  );
};
