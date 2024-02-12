import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUserPassword } from "../../redux/user/userSlice";

const ResetPasswordForm = () => {
  const [privatPassword, setPrivatPassword] = useState({
    newPassword: true,
    repeatedPassword: true,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userEmail = searchParams.get("email");
  console.log(userEmail);

  const formik = useFormik({
    initialValues: {
      email: userEmail,
      newPassword: "",
      repeatedPassword: "",
    },
    onSubmit: (email, newPassword) => {
      const userData = { email, newPassword };
      dispatch(resetUserPassword(userData))
        .unwrap()
        .then(() => {
          navigate("/signin");
        });
    },
  });

  const { newPassword, repeatedPassword } = formik.values;

  const { errors, touched, handleChange, handleBlur } = formik;

  //   const onPasswordPrivacySetting = (value) => {
  //     setPrivatPassword((prevPassword) => ({
  //       ...prevPassword,
  //       [value]: !prevPassword[value],
  //     }));
  //   };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="newPassword">Enter your new password</label>
      <input
        className={`main-input ${
          errors.newPassword && touched.newPassword ? "error-input" : ""
        } `}
        id="newPassword"
        type={privatPassword.newPassword ? "password" : "text"}
        name="newPassword"
        value={newPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Password"
      />
      <label>Сonfirm your new password</label>
      <input
        className={`main-input ${
          errors.repeatedPassword && touched.repeatedPassword
            ? "error-input"
            : ""
        } `}
        type={privatPassword.repeatedPassword ? "password" : "text"}
        name="repeatedPassword"
        value={repeatedPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResetPasswordForm;
