import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiUserLogin, resendVerifyEmail } from "../../redux/user/userSlice";
import { selectUserEmail } from "../../redux/user/userSelectors";
import { StyledLoginForm } from "./LoginForm.styled";
import { StyledMainContainer } from "styled";

import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";
import { ReactComponent as IconGoogle } from "../../assets/icons/icons8-google.svg";
import { signInSchema, signInSchemaUK } from "services/schemes/signInSchema";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const localeSchema = { en: signInSchema, uk: signInSchemaUK };
  const dispatch = useDispatch();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const email = useSelector(selectUserEmail);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: localeSchema[i18n.language],
    onSubmit: (values) => {
      const formData = { email: values.email, password: values.password };
      dispatch(apiUserLogin(formData));
    },
  });
  return (
    <StyledMainContainer className="register-container">
      <StyledLoginForm onSubmit={formik.handleSubmit}>
        <h2 className="title">{t("loginTitle")}</h2>
        <label className="label">
          <span className="label-text">{t("email")}</span>
        </label>

        <input
          className="input"
          type="email"
          name="email"
          placeholder={t("placeholderEmail")}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
        <label className="label">
          <span className="label-text">{t("password")}</span>
        </label>
        <div className="icon-wrapper">
          <input
            className="input"
            type={visiblePassword ? "text" : "password"}
            name="password"
            placeholder={t("placeholderPassword")}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {visiblePassword ? (
            <IconClosedEye
              onClick={() => setVisiblePassword(false)}
              className="eye-icon"
            />
          ) : (
            <IconOpenedEye
              onClick={() => setVisiblePassword(true)}
              className="eye-icon"
            />
          )}

          {formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <button className="button" type="submit">
          {t("loginBtn")}
        </button>
        <button className="button" type="submit">
          <div className="google-wrapper">
            <IconGoogle className="google-icon" />
            <a
              className="text-google"
              href="https://water-tracker-backend-0wax.onrender.com/api/user/google"
            >
              {t("loginGoogle")}
            </a>
          </div>
        </button>
        <div className="lower-buttons-wrapper">
          <Link to="/signup" className="link">
            {t("loginLinkSignUp")}
          </Link>

          <Link to="/forgotpassword" className="link">
            {t("loginLinkForgot")}
          </Link>
        </div>
        <button
          className="resend-verify"
          type="button"
          onClick={() => {
            dispatch(resendVerifyEmail(email));
          }}
        >
          {t("loginLinkResend")}
        </button>
      </StyledLoginForm>
    </StyledMainContainer>
  );
};

export default LoginForm;
