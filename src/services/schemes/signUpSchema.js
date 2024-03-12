import * as yup from "yup";

export const signUpSchema = yup.object().shape(
  {
    email: yup
      .string()
      .required("Here must be your e-mail")
      .email("Invalid email"),

    password: yup
      .string()
      .min(8, "Invalid password (8-64 characters)")
      .max(64, "Invalid password (8-64 characters)")
      .when(["repeatPassword"], {
        is: (repeatPassword) => repeatPassword,
        then: (schema) => schema.required("You must enter the password"),
      }),
    repeatPassword: yup
      .string()
      .min(8, "Invalid password (8-64 characters)")
      .max(64, "Invalid password (8-64 characters)")
      .oneOf([yup.ref("password")], "Passwords don't match"),
  },
  [["password"], ["repeatPassword"]]
);



export const signUpSchemaUK = yup.object().shape(
  {
    email: yup
      .string()
      .required("Тут має бути ваша електронна пошта")
      .email("Невалідна пошта"),

    password: yup
      .string()
      .min(8, "Неприпустимий пароль (від 8 до 64 символів)")
      .max(64, "Неприпустимий пароль (від 8 до 64 символів)")
      .when(["repeatPassword"], {
        is: (repeatPassword) => repeatPassword,
        then: (schema) => schema.required("Ви повинні ввести пароль"),
      }),
    repeatPassword: yup
      .string()
      .min(8, "Неприпустимий пароль (від 8 до 64 символів)")
      .max(64, "Неприпустимий пароль (від 8 до 64 символів)")
      .oneOf([yup.ref("password")], "Паролі не співпадають"),
  },
  [["password"], ["repeatPassword"]]
);
