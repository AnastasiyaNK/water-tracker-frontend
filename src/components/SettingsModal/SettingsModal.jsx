import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useFormik } from "formik";
import { Modal } from "components";
import { StyledSettingsModalForm } from "./SettingsModule.styled";
import { RotatingLines } from "react-loader-spinner";
import {
  selectIsUserAvatarLoading,
  selectUserAvatar,
  selectUserName,
  selectUserEmail,
  selectUserGender,
} from "../../redux/user/userSelectors";
import { updateUserAvatar, updateUserInfo } from "../../redux/user/userSlice";
import { closeAllModals } from "../../redux/modal/modalsReduser";
import { toastRejected } from "services/UserNotification";
import { settingsModalSchema } from "services/schemes/settingsSchema";

import { ReactComponent as IconUpload } from "../../assets/icons/arrow-up-tray.svg";
import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";

const SettingsModal = () => {
  const [privatPassword, setPrivatPassword] = useState({
    currentPassword: true,
    newPassword: true,
    repeatedPassword: true,
  });

  const dispatch = useDispatch();
  const isAvatarLoading = useSelector(selectIsUserAvatarLoading);
  const userAvatar = useSelector(selectUserAvatar);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userGender = useSelector(selectUserGender);

  const handleAvatarUpdate = async (event) => {
    const newAvatarFile = event.target.files[0];

    await dispatch(updateUserAvatar(newAvatarFile));
  };

  const handleSubmit = async ({
    name,
    email,
    gender,
    currentPassword,
    newPassword,
  }) => {
    try {
      if (newPassword === "") {
        const newUserData = { name, email, gender };
        dispatch(updateUserInfo(newUserData));
      } else {
        const newUserData = {
          name,
          email,
          gender,
          currentPassword,
          newPassword,
        };
        dispatch(updateUserInfo(newUserData));
      }
      dispatch(closeAllModals());
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: userName,
      email: userEmail,
      gender: userGender,
      currentPassword: "",
      newPassword: "",
      repeatedPassword: "",
    },
    validationSchema: settingsModalSchema,
    onSubmit: handleSubmit,
  });

  const onPasswordPrivacySetting = (value) => {
    setPrivatPassword((prevPassword) => ({
      ...prevPassword,
      [value]: !prevPassword[value],
    }));
  };

  return (
    <Modal title="Setting" styledClass="settings-modal">
      <StyledSettingsModalForm onSubmit={formik.handleSubmit}>
        <p className="secondary-title upload-title">Your photo</p>
        <div className="upload-wrapper">
          <div className="img-box">
            {isAvatarLoading ? (
              <RotatingLines width="60" strokeColor="#9EBBFF" />
            ) : (
              <img src={userAvatar} alt="avatar"></img>
            )}
          </div>
          <label className="upload-lable">
            <input
              className="upload-input"
              type="file"
              accept="image/*"
              name="avatar"
              onChange={handleAvatarUpdate}
            ></input>
            <div className="upload-btn">
              <IconUpload className="upload-svg" />
              <p className="upload-btn-text">Upload a photo</p>
            </div>
          </label>
        </div>

        <div className="global-wrapper">
          <div className="leftside-wrapper">
            <p className="secondary-title gender-title">Your gender identity</p>
            <div className="gender-wrapper">
              <div className="radio-btn-wrapper">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                  />
                  <span>Woman</span>
                </label>
              </div>
              <div className="radio-btn-wrapper">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                  />
                  <span>Man</span>
                </label>
              </div>
            </div>

            <p className="secondary-title">Your name</p>
            <label>
              <input
                className={`main-input ${
                  formik.errors.name ? "error-input" : ""
                } `}
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="name"
              />
            </label>
            {formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
            <p className="secondary-title email-title">E-mail</p>
            <label>
              <input
                className={`main-input ${
                  formik.errors.email ? "error-input" : ""
                } `}
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="e-mail"
              />
            </label>
            {formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>

          <div className="rigthside-wrapper">
            <p className="secondary-title password-title">Password</p>
            <p className="password-subtitle">Outdated password:</p>
            <div className="password-wrapper">
              <div
                className="eye-btn"
                onClick={() => onPasswordPrivacySetting("currentPassword")}
              >
                {privatPassword.currentPassword ? (
                  <IconClosedEye className="eye-icon" />
                ) : (
                  <IconOpenedEye className="eye-icon" />
                )}
              </div>

              <label>
                <input
                  className={`main-input ${
                    formik.errors.currentPassword ? "error-input" : ""
                  } `}
                  type={privatPassword.currentPassword ? "password" : "text"}
                  name="currentPassword"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  placeholder="Password"
                />
              </label>
              {formik.errors.currentPassword && (
                <div className="error">{formik.errors.currentPassword}</div>
              )}
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
                  className={`main-input ${
                    formik.errors.newPassword ? "error-input" : ""
                  } `}
                  type={privatPassword.newPassword ? "password" : "text"}
                  name="newPassword"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  placeholder="Password"
                />
              </label>
              {formik.errors.newPassword && (
                <div className="error">{formik.errors.newPassword}</div>
              )}
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
                  className={`main-input ${
                    formik.errors.repeatedPassword ? "error-input" : ""
                  } `}
                  type={privatPassword.repeatedPassword ? "password" : "text"}
                  name="repeatedPassword"
                  value={formik.values.repeatedPassword}
                  onChange={formik.handleChange}
                  placeholder="Password"
                />
              </label>
              {formik.errors.repeatedPassword && (
                <div className="error">{formik.errors.repeatedPassword}</div>
              )}
            </div>
          </div>
        </div>
        <button className="settings-submit-btn" type="submit">
          Save
        </button>
      </StyledSettingsModalForm>
    </Modal>
  );
};

export default SettingsModal;
