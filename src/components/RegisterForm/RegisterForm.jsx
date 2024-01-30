import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Зберігаємо дані в локальне сховище
    localStorage.setItem('formData', JSON.stringify(formData));
    // Додаткова логіка для відправки даних на сервер
  };

  return (
    <form onSubmit={handleSubmit}>
     <label> Sign In </label>

      <label for="email">Enter your email</label>
      <input type="email" id="email" name="email" required></input>
       <label for="password">Enter your password</label>
      <input type="password" id="password" name="password" required></input>
      <button type="submit" value="Зареєструватися"> Sing Up</button>
    </form>
  );
};

export default RegistrationForm;
