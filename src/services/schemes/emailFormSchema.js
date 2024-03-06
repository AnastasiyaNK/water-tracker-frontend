import * as yup from "yup";

export const emailFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Here must be your e-mail")
    .email("Invalid email"),
});
