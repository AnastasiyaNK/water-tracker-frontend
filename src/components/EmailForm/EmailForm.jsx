import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { getLinkToChangePass } from "../../redux/user/userSlice";
import { StyledEmailForm } from "./EmailForm.styled";
import { emailFormSchema, emailFormSchemaUK } from "../../services/schemes/emailFormSchema";
import { useTranslation } from "react-i18next";

const EmailForm = () => {
  const dispatch = useDispatch();
  const { t,i18n } = useTranslation();
  const localeSchema = { en: emailFormSchema, uk: emailFormSchemaUK };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: localeSchema[i18n.language],
    onSubmit: (email) => {
      dispatch(getLinkToChangePass(email));
    },
  });

  const { email } = formik.values;
  const { errors, touched, handleChange, handleBlur } = formik;

  console.log(formik.touched.email);

  return (
    <StyledEmailForm onSubmit={formik.handleSubmit}>
      <h2 className="title">{t("emailFormTitle")}</h2>
      <p className="text-info">{t("emailFormText")}</p>
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
        {t("submit")}
      </button>
    </StyledEmailForm>
  );
};

export default EmailForm;
