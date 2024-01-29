import Logo from "../../assets/icons/logo-water.svg";

import { Wrapper, WrapperLogo } from "./Header.styled";

import { StyledMainContainer } from "styled";
import { UserAuth } from "./UserAuth/UserAuth";
import { ModalHead } from "./UserLogoutModal/UserLogoutModal.styled";
import { ModalHeader } from "./ModalHeader/ModalHeader";
import { useState } from "react";
import { SettingsModal } from "components";

const Header = ({ props }) => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const authenticated = true;

  const onOpenDropdown = () => setIsDropDownOpen(true);
  const onCloseDropdown = () => setIsDropDownOpen(false);
  const onOpenLogOutModal = () => {};
  return (
    <>
      <StyledMainContainer>
        <Wrapper>
          <WrapperLogo to="/welcome">
            <img src={Logo} alt="logo of App" />
          </WrapperLogo>
          <ModalHead />
          {authenticated ? (
            <div>
              <p>Aleg</p> <img src="" alt="Avatar" />{" "}
              <div style={{ position: "relative" }}>
                <button type="button" onClick={onOpenDropdown}>
                  Arrow
                </button>
                <ModalHeader
                  isOpen={isDropdownOpen}
                  onOpenLogoutModal={onOpenLogOutModal}
                  onOpenSettingsModal={setIsOpenModal}
                  onClose={onCloseDropdown}
                />
              </div>{" "}
            </div>
          ) : (
            <UserAuth />
          )}
        </Wrapper>
      </StyledMainContainer>
      {isOpenModal && <SettingsModal toggleModal={setIsOpenModal} />}
    </>
  );
};

export default Header;
