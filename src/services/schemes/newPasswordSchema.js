import * as yup from "yup";

export const newPasswordSchema = yup.object().shape(
  {
    newPassword: yup
      .string()
      .min(8, "Invalid password (8-64 characters)")
      .max(64, "Invalid password (8-64 characters)")
      .when(["repeatPassword"], {
        is: (repeatPassword) => repeatPassword,
        then: (schema) => schema.required("You must enter the password"),
      }),
    repeatedPassword: yup
      .string()
      .min(8, "Invalid password (8-64 characters)")
      .max(64, "Invalid password (8-64 characters)")
      .oneOf([yup.ref("newPassword")], "Passwords don't match"),
  },
  [["password"], ["repeatPassword"]]
);
