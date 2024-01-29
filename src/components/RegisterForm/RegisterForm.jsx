import React, { useState, useEffect } from "react";
import { StyledRegisterForm } from "./styled";

const RegisterForm = () => {

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
 
    localStorage.setItem("formData", JSON.stringify({ ...formData, [name]: value }));
  };

  return (
    <StyledRegisterForm>
      <form >

        <p>Sign Up</p>

        <p>Enter your email</p>
        <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleInputChange} />
        
         <p>Enter your password  </p>
        <input  type="password"  name="password"  placeholder="password"   value={formData.password}
          onChange={handleInputChange}
        />
           <p>Repeat Password</p>
        <input  type="password" name="confirmPassword" placeholder="Repeat your password" value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Sign Up</button>
        <p> Sign in</p>
      </form>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
