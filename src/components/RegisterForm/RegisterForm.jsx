import React, { useEffect, useState } from 'react';
import { StyledLoginForm } from './styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { apiUserRegister } from 'redux/userSlice';
import { userSlice } from 'redux';

//import { userSlice } from 'redux';
//import { persistData } from 'redux/actions'; // Припустимо, це ваша дія для збереження даних на бекенді

const LoginForm = () => {
  const dispatch = useDispatch();
  const { email, password, repeatPassword } = useSelector(state => state.user); // Припустимо, що такі дані зберігаються в стані Redux
  const [error, setError] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('userFormData');
    if (savedData) {
      //const parsedData = JSON.parse(savedData);
     // dispatch(persistData(parsedData)); // Дія для збереження даних у Redux сторі
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
          const response = await fetch('your_backend_login_endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error('Failed to register user');
          }

          const data = await response.json();
          dispatch(apiUserRegister(data.user));
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
      <button className="butten" type="submit">
        Sign Up
      </button>
    </StyledLoginForm>
  );
};

export default LoginForm;