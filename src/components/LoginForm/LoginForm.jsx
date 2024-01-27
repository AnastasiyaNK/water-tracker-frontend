//import React, { useState } from "react";

const LoginForm = () => {
 

  return (
    <div className="App">
      <form >
        <p>Enter your email</p>
        <input
          type="email"
          name="email"
          placeholder="email"
          
        />
        <p>Enter your password</p>
        <input type="password" name="password" placeholder="Password"
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};


  
export default LoginForm;
