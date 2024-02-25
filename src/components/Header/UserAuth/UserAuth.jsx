import { ReactComponent as IconDropUp } from "assets/icons/chevron-double-up.svg";
import { UserDropdown } from "../../index";
import { StyledUserAuth } from "./UserAuth.styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectUserAvatar,
  selectUserName,
} from "../../../redux/user/userSelectors";

const UserAuth = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  const onOpen = () => {
    setIsDropdownOpen(true);
  };

  const onClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <StyledUserAuth>
      <button className="dropdown-open-btn" onClick={onOpen}>
        <span className="name-user">{userName}</span>
        <img className="avatar-user" src={userAvatar} alt={userName} />
        <span className="auth-btn">
          <IconDropUp className="auth-icon" />
        </span>
      </button>
      <UserDropdown onClose={onClose} isOpen={isDropdownOpen} />
    </StyledUserAuth>
  );
};

export default UserAuth;
