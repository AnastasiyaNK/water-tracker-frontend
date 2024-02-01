import { StyledSettingsModalForm } from "./SettingsModule.styled";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ReactComponent as IconUpload } from "../../assets/icons/arrow-up-tray.svg";
import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";
import { Modal } from "components";

// ! DELETE test COMMENT
const testLoadingUploadPhoto = true;
const url = "123";
//! DELETE test COMMENT

const SettingsModal = ({ toggleModal }) => {
  const [privatPassword, setPrivatPassword] = useState({
    outdatedPassword: true,
    newPassword: true,
    repeatedPassword: true,
  });

  const validationSchema = yup.object().shape(
    {
      name: yup.string().max(32, "That's a very long name"),
      email: yup
        .string()
        .required("Here must be your e-mail")
        .email("Invalid email"),
      outdatedPassword: yup
        .string()
        .min(8, "Invalid password (8-64 characters)")
        .max(64, "Invalid password (8-64 characters)")
        .when(["newPassword", "repeatedPassword"], {
          is: (newPassword, repeatedPassword) =>
            newPassword || repeatedPassword,
          then: (schema) => schema.required("You must enter your old password"),
        }),
      newPassword: yup
        .string()
        .min(8, "Invalid password (8-64 characters)")
        .max(64, "Invalid password (8-64 characters)")
        .when(["outdatedPassword", "repeatedPassword"], {
          is: (outdatedPassword, repeatedPassword) =>
            outdatedPassword || repeatedPassword,
          then: (schema) => schema.required("Enter a new password"),
        }),
      repeatedPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Passwords don't match")
        .when(["outdatedPassword", "newPassword"], {
          is: (outdatedPassword, newPassword) =>
            outdatedPassword || newPassword,
          then: (schema) => schema.required("Confirm new password"),
        }),
    },
    [
      ["newPassword", "repeatedPassword"],
      ["outdatedPassword", "repeatedPassword"],
      ["outdatedPassword", "newPassword"],
    ]
  );

  const handleSubmit = async (values) => {
    try {
      console.log(formik.values);
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "Ivan",
      email: "Ivan@rasha.parasha",
      outdatedPassword: "",
      newPassword: "",
      repeatedPassword: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const onPasswordPrivacySetting = (value) => {
    setPrivatPassword((prevPassword) => ({
      ...prevPassword,
      [value]: !prevPassword[value],
    }));
  };

  return (
    <Modal
      title="Setting"
      styledClass="settings-modal"
      toggleModal={toggleModal}
    >
      <StyledSettingsModalForm onSubmit={formik.handleSubmit}>
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
            <p className="secondary-title gender-title">Your gender identity</p>
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
                onClick={() => onPasswordPrivacySetting("outdatedPassword")}
              >
                {privatPassword.outdatedPassword ? (
                  <IconClosedEye className="eye-icon" />
                ) : (
                  <IconOpenedEye className="eye-icon" />
                )}
              </div>

              <label>
                <input
                  className={`main-input ${
                    formik.errors.outdatedPassword ? "error-input" : ""
                  } `}
                  type={privatPassword.outdatedPassword ? "password" : "text"}
                  name="outdatedPassword"
                  value={formik.values.outdatedPassword}
                  onChange={formik.handleChange}
                  placeholder="Password"
                />
              </label>
              {formik.errors.outdatedPassword && (
                <div className="error">{formik.errors.outdatedPassword}</div>
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
