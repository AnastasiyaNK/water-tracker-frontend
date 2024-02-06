import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { apiUserLogin } from "../../redux/userSlice";
import { StyledLoginContainer, StyledLoginForm } from "./LoginForm.styled";
import { StyledMainContainer } from "styled";
import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";
import { ReactComponent as IconGoogle } from "../../assets/icons/icons8-google.svg";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const signinSchema = Yup.object().shape({
    email: Yup.string()
      .required("Here must be your e-mail")
      .email("Invalid email"),

    password: Yup.string()
      .min(8, "Invalid password (8-64 characters)")
      .max(64, "Invalid password (8-64 characters)")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    signinSchema,
    onSubmit: (values) => {
      const formData = { email: values.email, password: values.password };
      dispatch(apiUserLogin(formData));
    },
  });
  return (
    <StyledMainContainer>
      <StyledLoginContainer>
        <StyledLoginForm onSubmit={formik.handleSubmit}>
          <h2 className="title">Sign In</h2>
          <label className="label">
            <span className="label-text">Enter your email</span>
          </label>

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label className="label">
            <span className="label-text">Enter your password</span>
          </label>
          <div className="icon-wrapper">
            <input
              className="input"
              type={visiblePassword ? "text" : "password"}
              name="password"
              placeholder="Password"
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

            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <button className="button" type="submit">
            Sign In
          </button>
          <button className="button" type="submit">
            <div className="google-wrapper">
              <IconGoogle />
              <span className="text-google">Sign in wiht Google</span>
            </div>
          </button>
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </StyledLoginForm>
      </StyledLoginContainer>
    </StyledMainContainer>
  );
};

export default LoginForm;
