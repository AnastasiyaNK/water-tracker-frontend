import React, { useState, useEffect } from "react";

const LoginForm = () => {
  // Отримання даних з локального сховища при першому завантаженні
  useEffect(() => {
    const savedFormData = localStorage.getItem("loginFormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  // Створюємо стан для зберігання даних форми
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Обробник події зміни значення полів вводу
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Зберігаємо дані у локальне сховище після зміни
    localStorage.setItem("loginFormData", JSON.stringify({ ...formData, [name]: value }));
  };

  // Обробник події відправлення форми
  


  return (
    <div className="App">
      <form >
        <p>Enter your email</p>
        <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleInputChange} />
        <p>Enter your password</p>
        <input  type="password" name="password" placeholder="Password" value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;


 


