import React from 'react';
import {
  StyledRegisterContainer,
  StyledRegisterForm,
} from './RegisterForm.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { apiUserLogin } from '../../redux/userSlice';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
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
        <Link to="/signup" className="link">
          Sign Up
        </Link>
      </StyledRegisterForm>
    </StyledRegisterContainer>
  );
};

export default RegisterForm;