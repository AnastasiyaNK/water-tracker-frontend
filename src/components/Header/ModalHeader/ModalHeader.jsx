import { useEffect } from "react";
import { Button, ModalWrapper, ModalOverlay } from "./ModalHeader.styled";
import Icons from "../../../assets/icons/cog-6-tooth.svg";
import Icon from "../../../assets/icons/arrow-right-on-rectangle.svg";

export const ModalHeader = ({
  isOpen,

  onOpenLogoutModal,
  onClose,
}) => {
  useEffect(() => {
    const close = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", close);

    return () => {
      document.removeEventListener("keydown", close);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <>
          <ModalOverlay onClick={onClose} />
          <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <Button
              type="button"
              onClick={() => {
                onClose();
              }}
            >
              <img src={Icons} alt="Setting" />
              <p>Setting</p>
            </Button>
            <Button
              type="button"
              onClick={() => {
                onClose();
                onOpenLogoutModal();
              }}
            >
              <img src={Icon} alt="Setting" />
              <p>Log out</p>
            </Button>
          </ModalWrapper>
        </>
      )}
    </>
  );
};
