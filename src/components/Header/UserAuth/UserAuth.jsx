import Icons from "../../../assets/icons/user.svg";
import { WrapperSignin } from "./UserAuth.styled";

export const UserAuth = () => {
  return (
    <WrapperSignin to="/signin">
      <p>Sign in</p>
      <img src={Icons} alt="logo of App" />
    </WrapperSignin>
  );
};
