import { StyledSettingsModalBackdrop } from "./SettingsModule.styled";
import { RotatingLines } from "react-loader-spinner";
import { ReactComponent as IconClose } from "../../assets/icons/close.svg";
import { ReactComponent as IconUpload } from "../../assets/icons/arrow-up-tray.svg";
import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";
import { useState } from "react";

// ! DELETE test COMMENT
const testLoadingUploadPhoto = true;
const url = "123";
//! DELETE test COMMENT

const SettingsModal = ({ toggleModal }) => {
  const [privatPassword, setPrivatPassword] = useState({
    outdated: false,
    newPassword: false,
    repeatedPassword: false,
  });

  const onPasswordPrivacySetting = (value) => {
    setPrivatPassword((prevPassword) => ({
      ...prevPassword,
      [value]: !prevPassword[value],
    }));
  };

  return (
    <StyledSettingsModalBackdrop>
      <div className="settings-modal">
        <h2 className="title">Setting</h2>
        <button
          className="close-btn"
          type="button"
          onClick={() => toggleModal(false)}
        >
          <IconClose className="close-btn-svg" />
        </button>
        <form>
          <p className="secondary-title upload-title">Your photo</p>
          <div className="upload-wrapper">
            <div className="img-box">
              {testLoadingUploadPhoto ? (
                <RotatingLines width="50" strokeColor="#407BFF" />
              ) : (
                <img src={url} alt="avatar"></img>
              )}
            </div>
            <label className="upload-lable">
              <input
                className="upload-input"
                type="file"
                accept="image/*"
                name="avatar"
              ></input>
              <div className="upload-btn">
                <IconUpload className="upload-svg" />
                <p className="upload-btn-text">Upload a photo</p>
              </div>
            </label>
          </div>

          <div className="global-wrapper">
            <div className="leftside-wrapper">
              <p className="secondary-title gender-title">
                Your gender identity
              </p>
              <div className="gender-wrapper">
                <div className="radio-btn-wrapper">
                  <label>
                    <input type="radio" name="gender" value="female" />
                    <span>Woman</span>
                  </label>
                </div>
                <div className="radio-btn-wrapper">
                  <label>
                    <input type="radio" name="gender" value="male" />
                    <span>Man</span>
                  </label>
                </div>
              </div>

              <p className="secondary-title">Your name</p>
              <label>
                <input className="main-input" type="text" placeholder="name" />
              </label>
              <p className="secondary-title email-title">E-mail</p>
              <label>
                <input
                  className="main-input"
                  type="email"
                  placeholder="e-mail"
                />
              </label>
            </div>

            <div className="rigthside-wrapper">
              <p className="secondary-title password-title">Password</p>
              <p className="password-subtitle">Outdated password:</p>
              <div className="password-wrapper">
                <div
                  className="eye-btn"
                  onClick={() => onPasswordPrivacySetting("outdated")}
                >
                  {privatPassword.outdated ? (
                    <IconClosedEye className="eye-icon" />
                  ) : (
                    <IconOpenedEye className="eye-icon" />
                  )}
                </div>

                <label>
                  <input
                    className="main-input"
                    type={privatPassword.outdated ? "password" : "text"}
                    placeholder="Password"
                  />
                </label>
              </div>
              <p className="password-subtitle">New Password:</p>
              <div className="password-wrapper">
                <div
                  className="eye-btn"
                  onClick={() => onPasswordPrivacySetting("newPassword")}
                >
                  {privatPassword.newPassword ? (
                    <IconClosedEye className="eye-icon" />
                  ) : (
                    <IconOpenedEye className="eye-icon" />
                  )}
                </div>
                <label>
                  <input
                    className="main-input"
                    type={privatPassword.newPassword ? "password" : "text"}
                    placeholder="Password"
                  />
                </label>
              </div>
              <p className="password-subtitle">Repeat new password:</p>
              <div className="password-wrapper">
                <div
                  className="eye-btn"
                  onClick={() => onPasswordPrivacySetting("repeatedPassword")}
                >
                  {privatPassword.repeatedPassword ? (
                    <IconClosedEye className="eye-icon" />
                  ) : (
                    <IconOpenedEye className="eye-icon" />
                  )}
                </div>
                <label>
                  <input
                    className="main-input"
                    type={privatPassword.repeatedPassword ? "password" : "text"}
                    placeholder="Password"
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
        <button className="settings-submit-btn" type="submit">
          Save
        </button>
      </div>
    </StyledSettingsModalBackdrop>
  );
};

export default SettingsModal;
