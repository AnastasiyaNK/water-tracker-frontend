import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getLinkToChangePass } from "../../redux/user/userSlice";
import { StyledEmailForm } from "./EmailForm.styled";
import { emailFormSchema } from "../../services/schemes/emailFormSchema";

const EmailForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailFormSchema,
    onSubmit: (email) => {
      dispatch(getLinkToChangePass(email));
    },
  });

  const { email } = formik.values;
  const { errors, touched, handleChange, handleBlur } = formik;

  console.log(formik.touched.email);

  return (
    <StyledEmailForm onSubmit={formik.handleSubmit}>
      <h2 className="title">Find your account</h2>
      <p className="text-info">
        To change your password, enter the email address that is associated with
        your account.
      </p>
      <label className="label">
        <input
          className={`main-input ${
            errors.email && touched.email ? "error-input" : ""
          } `}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
        />
      </label>
      {errors.email && touched.email ? (
        <div className="error">{errors.email}</div>
      ) : null}
      <button className="button" type="submit">
        Submit
      </button>
    </StyledEmailForm>
  );
};

export default EmailForm;
