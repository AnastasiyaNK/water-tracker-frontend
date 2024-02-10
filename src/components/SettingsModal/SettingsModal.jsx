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

  const handleAvatarUpdate = (event) => {
    const newAvatarFile = event.target.files[0];

    dispatch(updateUserAvatar(newAvatarFile));
  };

  const handleSubmit = ({
    name,
    email,
    gender,
    currentPassword,
    newPassword,
  }) => {
    const stateUserData = {
      userGender,
      userName,
      userEmail,
      oldUserPassword: "",
      newUserPassword: "",
    };
    const localUserData = {
      gender,
      name,
      email,
      currentPassword,
      newPassword,
    };
    try {
      if (
        JSON.stringify(Object.values(stateUserData)) ===
        JSON.stringify(Object.values(localUserData))
      ) {
        dispatch(closeAllModals());
        return;
      } else if (newPassword === "") {
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

  const onPasswordPrivacySetting = (value) => {
    setPrivatPassword((prevPassword) => ({
      ...prevPassword,
      [value]: !prevPassword[value],
    }));
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

  const {
    name,
    email,
    gender,
    currentPassword,
    newPassword,
    repeatedPassword,
  } = formik.values;

  const { errors, touched, handleChange, handleBlur } = formik;

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
                    checked={gender === "female"}
                    onChange={handleChange}
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
                    checked={gender === "male"}
                    onChange={handleChange}
                  />
                  <span>Man</span>
                </label>
              </div>
            </div>

            <p className="secondary-title">Your name</p>
            <label>
              <input
                className={`main-input ${
                  errors.name && touched.name ? "error-input" : ""
                } `}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="name"
              />
            </label>
            {errors.name && touched.name ? (
              <div className="error">{errors.name}</div>
            ) : null}
            <p className="secondary-title email-title">E-mail</p>
            <label>
              <input
                className={`main-input ${
                  errors.email && touched.email ? "error-input" : ""
                } `}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e-mail"
              />
            </label>
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}
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
                    errors.currentPassword && touched.currentPassword
                      ? "error-input"
                      : ""
                  } `}
                  type={privatPassword.currentPassword ? "password" : "text"}
                  name="currentPassword"
                  value={currentPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
              </label>
              {errors.currentPassword && touched.currentPassword ? (
                <div className="error">{errors.currentPassword}</div>
              ) : null}
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
                    errors.newPassword && touched.newPassword
                      ? "error-input"
                      : ""
                  } `}
                  type={privatPassword.newPassword ? "password" : "text"}
                  name="newPassword"
                  value={newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
              </label>
              {errors.newPassword && touched.newPassword ? (
                <div className="error">{errors.newPassword}</div>
              ) : null}
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
                    errors.repeatedPassword && touched.repeatedPassword
                      ? "error-input"
                      : ""
                  } `}
                  type={privatPassword.repeatedPassword ? "password" : "text"}
                  name="repeatedPassword"
                  value={repeatedPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
              </label>
              {errors.repeatedPassword && touched.repeatedPassword ? (
                <div className="error">{errors.repeatedPassword}</div>
              ) : null}
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
