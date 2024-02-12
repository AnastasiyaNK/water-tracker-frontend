import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail } from "../../redux/user/userSelectors";
import { resetUserPassword } from "../../redux/user/userSlice";

const ResetPasswordForm = () => {
  const [privatPassword, setPrivatPassword] = useState({
    newPassword: true,
    repeatedPassword: true,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(selectUserEmail);

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
    <>
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
    </>
  );
};

export default ResetPasswordForm;
