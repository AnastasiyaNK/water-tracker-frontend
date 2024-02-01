import { ReactComponent as DropUp } from "assets/icons/chevron-double-up.svg";
import { StyledUserAuth } from "./UserAuth.styled";
import { useSelector } from "react-redux";
import { selectUserData } from "../../../redux/selectors";
import { UserDropdown } from "../HeaderDropdown/UserDropdown";
import { useState } from "react";

const UserAuth = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onOpen = () => {
    setIsDropdownOpen(true);
  };

  const onClose = () => {
    setIsDropdownOpen(false);
  };

  const userData = useSelector(selectUserData);
  const email = userData.email;
  console.log(email);
  const userName = email.split("@")[0];
  return (
    <StyledUserAuth onClick={onOpen}>
      <span className="name-user">{userName}</span>
      <img className="avatar-user" src="" alt={userName} />
      <span className="auth-btn">
        <DropUp className="auth-icon" />
      </span>
      <UserDropdown onClose={onClose} isOpen={isDropdownOpen} />
    </StyledUserAuth>
  );
};

export default UserAuth;
