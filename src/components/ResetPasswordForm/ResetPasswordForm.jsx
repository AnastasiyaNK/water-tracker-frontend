import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUserPassword } from "../../redux/user/userSlice";
import { StyledResetPassForm } from "./ResetPasswordFor.styled";
import { newPasswordSchema } from "../../services/schemes/newPasswordSchema";

import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";

const ResetPasswordForm = () => {
  const [privatPassword, setPrivatPassword] = useState({
    newPassword: true,
    repeatedPassword: true,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get("email");

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      repeatedPassword: "",
    },
    validationSchema: newPasswordSchema,
    onSubmit: ({ newPassword }) => {
      const userData = { email: userEmail, password: newPassword };
      dispatch(resetUserPassword(userData))
        .unwrap()
        .then(() => {
          navigate("/signin");
        });
    },
  });

  const { newPassword, repeatedPassword } = formik.values;
  const { errors, touched, handleChange, handleBlur } = formik;

  const onPasswordPrivacySetting = (value) => {
    setPrivatPassword((prevPassword) => ({
      ...prevPassword,
      [value]: !prevPassword[value],
    }));
  };

  return (
    <StyledResetPassForm onSubmit={formik.handleSubmit}>
      <p className="password-subtitle">Enter your new password</p>
      <div className="password-wrapper first-pass-wrapper">
        <label htmlFor="newPassword">
          <input
            className={`main-input ${
              errors.newPassword && touched.newPassword ? "error-input" : ""
            } `}
            id="newPassword"
            type={privatPassword.newPassword ? "password" : "text"}
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
          />
        </label>

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

        {errors.newPassword && touched.newPassword ? (
          <div className="error">{errors.newPassword}</div>
        ) : null}
      </div>
      <p className="password-subtitle"> Сonfirm your new password</p>
      <div className="password-wrapper">
        <label htmlFor="repeatedPassword">
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

        {errors.repeatedPassword && touched.repeatedPassword ? (
          <div className="error">{errors.repeatedPassword}</div>
        ) : null}
      </div>

      <button className="button" type="submit">
        Submit
      </button>
    </StyledResetPassForm>
  );
};

export default ResetPasswordForm;
