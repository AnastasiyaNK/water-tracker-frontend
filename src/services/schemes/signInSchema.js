import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Here must be your e-mail")
    .email("Invalid email"),

  password: yup
    .string()
    .min(8, "Invalid password (8-64 characters)")
    .max(64, "Invalid password (8-64 characters)"),
});
