import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getLinkToChangePass } from "../../redux/user/userSlice";
import { StyledEmailContainer, StyledEmailForm } from "./EmailForm.styled";

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
    <StyledEmailContainer>
      <StyledEmailForm onSubmit={formik.handleSubmit}>
        <h2 className="title">Find your account</h2>
        <p className="text-info">
          To change your password, enter the email address that is associated
          with your account.
        </p>
        <label className="label">
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <button className="button" type="submit">
          Submit
        </button>
      </StyledEmailForm>
    </StyledEmailContainer>
  );
};

export default EmailForm;
