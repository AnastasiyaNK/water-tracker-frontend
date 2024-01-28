//import React, { useState } from "react";
import { StyledRegisterForm } from "./styled";

const RegisterForm = () => {
  
  return (
    <StyledRegisterForm>
      <form>
        <p>Sign Up</p>
        <p>Enter your email</p>
        <input type="email" name="email"  placeholder="E-mail"  />
        <p>Enter your password  </p>
        <input type="password" name="password" placeholder="password"   />
        <p>Repeat Password</p>
        <input type="password" name="confirmPassword" placeholder="Repeat your password" />
        <button type="submit">Sign Up</button>
        <p> Sign in</p>
      </form>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
