import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { apiUserLogin } from "../../redux/userSlice";
import {
  StyledRegisterContainer,
  StyledRegisterForm,
} from "./LoginForm.styled";
import GoogleButton from "../GoogleAuth/GoogleAuth"

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const formData = { email: values.email, password: values.password };
      dispatch(apiUserLogin(formData));
    },
  });
  return (
    <StyledRegisterContainer>
      <StyledRegisterForm onSubmit={formik.handleSubmit}>
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
        <label className="label">
          <span className="label-text">Enter your password</span>
        </label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button className="button" type="submit">
          Sign In
        </button>
         <GoogleButton/>
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      </StyledRegisterForm>
    </StyledRegisterContainer>
  );
};

export default LoginForm;
