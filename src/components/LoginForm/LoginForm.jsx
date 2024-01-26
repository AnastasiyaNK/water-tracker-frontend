import React from "react";

const LoginForm = () => {
  return <div className="App">
    <h1>React form </h1>
    <form>
      <label> Sign In </label>

      <label for="email">Enter your email</label>
      <input type="email" id="email" name="email" required></input>
       <label for="password">Enter your password</label>
      <input type="password" id="password" name="password" required></input>
      <button type="submit" value="Зареєструватися"> Sing Up</button>
      
    </form>
  </div>;
};

export default LoginForm;
