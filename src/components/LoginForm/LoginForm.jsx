import React from 'react';
import { StyledLoginForm } from './LoginForm.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { apiUserRegister } from 'redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: values => {
      if (values.password === values.repeatPassword) {
        const formData = { email: values.email, password: values.password };
        dispatch(apiUserRegister(formData))
          .unwrap()
          .then(() => {
            navigate('/signin');
          });
      }
    },
  });

  return (
    <StyledLoginForm onSubmit={formik.handleSubmit}>
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
      <input
        className="input"
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label className="label">
        <span className="label-text">Repeat password</span>
      </label>
      <input
        className="input"
        name="repeatPassword"
        type="password"
        placeholder="Repeat password"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
      />

      {formik.values.password !== formik.values.repeatPassword && (
        <div>Your Passwords must match</div>
      )}
      <button className="butten" type="submit">
        Sign Up
      </button>

      <Link to="/signin" className="link">
        Sign In
      </Link>
    </StyledLoginForm>
  );
};

export default LoginForm;