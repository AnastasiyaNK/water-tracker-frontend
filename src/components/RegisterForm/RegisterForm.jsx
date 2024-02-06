import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { apiUserRegister } from "../../redux/userSlice";
import {
  StyledRegisterContainer,
  StyledRegisterForm,
} from "./RegisterForm.styled";
import { StyledMainContainer } from "styled";
// import { ReactComponent as IconOpenedEye } from "../../assets/icons/eye.svg";
import { ReactComponent as IconClosedEye } from "../../assets/icons/eye-slash.svg";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signinSchema = Yup.object().shape({
    email: Yup.string()
      .required("Here must be your e-mail")
      .email("Invalid email"),

    password: Yup.string()
      .min(8, "Invalid password (8-64 characters)")
      .max(64, "Invalid password (8-64 characters)")
      .required("Required"),
    repeatedPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords don't match")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    signinSchema,
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
    <StyledMainContainer>
      <StyledRegisterContainer>
        <StyledRegisterForm onSubmit={formik.handleSubmit}>
          <h2 className="title">Sign Up</h2>
          <label className="label">
            <span className="label-text">Enter your email</span>
          </label>

          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <label className="label">
            <span className="label-text">Enter your password</span>
          </label>
          <div className="icon-wrapper">
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <IconClosedEye className="eye-icon" />
          </div>

          <label className="label">
            <span className="label-text">Repeat password</span>
          </label>
          <div className="icon-wrapper">
            <input
              className="input"
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
            />
            <IconClosedEye className="eye-icon" />
          </div>

          {formik.values.password !== formik.values.repeatPassword && (
            <div>Your Passwords must match</div>
          )}
          <button className="button" type="submit">
            Sign Up
          </button>

          <Link to="/signin" className="link">
            Sign In
          </Link>
        </StyledRegisterForm>
      </StyledRegisterContainer>
    </StyledMainContainer>
  );
};

export default RegisterForm;
