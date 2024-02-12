import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getLinkToChangePass } from "../../redux/user/userSlice";

const EmailForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (email) => {
      dispatch(getLinkToChangePass(email));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Enter your email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
