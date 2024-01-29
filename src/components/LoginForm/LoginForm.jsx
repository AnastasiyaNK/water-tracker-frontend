import React, { useState, useEffect } from "react";


const LoginForm = () => {
  useEffect(() => {
    const savedFormData = localStorage.getItem("loginFormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    localStorage.setItem(
      "loginFormData",
      JSON.stringify({ ...formData, [name]: value })
    );
  };

  return (
    <div className="App">

        <p>Enter your email</p>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <p>Enter your password</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Sign in</button>

    </div>
  );
};

export default LoginForm;
