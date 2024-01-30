import React, { useEffect, useState } from 'react';
import { StyledLoginForm } from './styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { apiUserRegister } from 'redux/userSlice';
import { registerUser } from './api'; 

const LoginForm = () => {
  const dispatch = useDispatch();
  const { email, password, repeatPassword } = useSelector(state => state.user);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('userFormData');
    if (savedData) {
      // const parsedData = JSON.parse(savedData);
      // dispatch(persistData(parsedData));
    }
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      email: email || '',
      password: password || '',
      repeatPassword: repeatPassword || '',
    },
    onSubmit: async values => {
      if (values.password === values.repeatPassword) {
        try {
          const formData = { email: values.email, password: values.password };
          await registerUser(formData); 
          dispatch(apiUserRegister(values.user));
          localStorage.removeItem('userFormData');
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError('Passwords must match');
      }
    },
    onChange: values => {
      localStorage.setItem('userFormData', JSON.stringify(values));
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

      {error && <div>{error}</div>}
      <button className="button" type="submit"> {/* Corrected typo 'butten' to 'button' */}
        Sign Up
      </button>
    </StyledLoginForm>
  );
};

export default LoginForm;
