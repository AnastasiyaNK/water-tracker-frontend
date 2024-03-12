import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { apiUserRegister } from "../../redux/user/userSlice";
import { StyledMainContainer } from "styled";
import { StyledRegisterForm } from "./RegisterForm.styled";
import { signUpSchema, signUpSchemaUK } from "services/schemes/signUpSchema";

import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";
import { ReactComponent as IconGoogle } from "../../assets/icons/icons8-google.svg";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {
  const { t, i18n } = useTranslation();
    const localeSchema = { en: signUpSchema, uk: signUpSchemaUK };

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleRepeatPassword, setVisibleRepeatPassword] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: localeSchema[i18n.language],
    onSubmit: (values) => {
      if (values.password === values.repeatPassword) {
        const formData = { email: values.email, password: values.password };
        dispatch(apiUserRegister(formData))
          .unwrap()
          .then(() => {
            navigate("/signin");
          });
      }
    },
  });

  return (
    <StyledMainContainer className="register-container">
      <StyledRegisterForm onSubmit={formik.handleSubmit}>
        <h2 className="title">{t("registerTitle")}</h2>
        <label className="label">
          <span className="label-text">{t("email")}</span>
        </label>

        <input
          className="input"
          name="email"
          type="email"
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
            name="password"
            type={visiblePassword ? "text" : "password"}
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

        <label className="label">
          <span className="label-text">{t("repeatPassword")}</span>
        </label>
        <div className="icon-wrapper">
          <input
            className="input"
            name="repeatPassword"
            type={visibleRepeatPassword ? "text" : "password"}
            placeholder={t("placeholderRepeatPassword")}
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
          />
          {visibleRepeatPassword ? (
            <IconClosedEye
              onClick={() => setVisibleRepeatPassword(false)}
              className="eye-icon"
            />
          ) : (
            <IconOpenedEye
              onClick={() => setVisibleRepeatPassword(true)}
              className="eye-icon"
            />
          )}
        </div>
        {formik.errors.repeatPassword && (
          <div className="error">{formik.errors.repeatPassword}</div>
        )}

        <button className="button" type="submit">
          {t("registerBtn")}
        </button>
        <button className="button" type="submit">
          <div className="google-wrapper">
            <IconGoogle className="google-icon" />
            <a
              className="text-google"
              href="https://water-tracker-backend-0wax.onrender.com/api/user/google"
            >
              {t("registerGoogle")}
            </a>
          </div>
        </button>

        <Link to="/signin" className="link">
          {t("loginLinkSignIn")}
        </Link>
      </StyledRegisterForm>
    </StyledMainContainer>
  );
};

export default RegisterForm;
