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

export const newPasswordSchemaUK = yup.object().shape(
  {
    newPassword: yup
      .string()
      .min(8, "Неприпустимий пароль (від 8 до 64 символів)")
      .max(64, "Неприпустимий пароль (від 8 до 64 символів)")
      .when(["repeatPassword"], {
        is: (repeatPassword) => repeatPassword,
        then: (schema) => schema.required("Ви повинні ввести пароль"),
      }),
    repeatedPassword: yup
      .string()
      .min(8, "Неприпустимий пароль (від 8 до 64 символів)")
      .max(64, "Неприпустимий пароль (від 8 до 64 символів)")
      .oneOf([yup.ref("newPassword")], "Паролі не співпадають"),
  },
  [["password"], ["repeatPassword"]]
);