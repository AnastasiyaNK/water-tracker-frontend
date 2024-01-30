import React, { useEffect } from 'react';
import { StyledRegisterContainer, StyledRegisterForm } from './RegisterForm.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { apiUserLogin, saveUserData } from 'redux/userSlice'; // Assuming you have actions for saving user data
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector(state => state.userData); // Assuming you have a reducer called userData to store user data

  const formik = useFormik({
    initialValues: {
      email: email || '', // Load from redux state or localStorage if available
      password: password || '', // Load from redux state or localStorage if available
    },
    onSubmit: values => {
      const formData = { email: values.email, password: values.password };
      dispatch(apiUserLogin(formData));
    },
  });

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      dispatch(saveUserData(storedData)); // Dispatch action to save data to Redux state
    }
  }, [dispatch]);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(formik.values));
  }, [formik.values]);

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
