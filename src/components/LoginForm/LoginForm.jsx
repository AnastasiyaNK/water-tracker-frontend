import React, { useEffect } from 'react';
import { StyledRegisterContainer, StyledRegisterForm } from './RegisterForm.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { apiUserLogin, saveUserData } from 'redux/userSlice'; 
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector(state => state.userData); 

  const formik = useFormik({
    initialValues: {
      email: email || '', 
      password: password || '', 
    },
    onSubmit: values => {
      const formData = { email: values.email, password: values.password };
      dispatch(apiUserLogin(formData));
    },
  });

  
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      dispatch(saveUserData(storedData)); 
    }
  }, [dispatch]);

  
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
