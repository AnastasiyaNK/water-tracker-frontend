import { ReactComponent as DropUp } from "assets/icons/chevron-double-up.svg";
import { StyledUserAuth } from "./UserAuth.styled";
import { useSelector } from "react-redux";
import { selectUserAvatar, selectUserName } from "../../../redux/selectors";
import { UserDropdown } from "../HeaderDropdown/UserDropdown";
import { useState } from "react";

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
    <StyledUserAuth onClick={onOpen}>
      <span className="name-user">{userName}</span>
      <img className="avatar-user" src={userAvatar} alt={userName} />
      <span className="auth-btn">
        <DropUp className="auth-icon" />
      </span>
      <UserDropdown onClose={onClose} isOpen={isDropdownOpen} />
    </StyledUserAuth>
  );
};

export default UserAuth;
