import * as yup from "yup";

export const settingsModalSchema = yup.object().shape(
  {
    name: yup.string().max(32, "That's a very long name"),
    email: yup
      .string()
      .required("Here must be your e-mail")
      .matches(
        /\w{0}[0-9a-zA-Zа-яА-Я]+@\w{0}[a-zA-Zа-яА-Я]+\.\w{0}[a-zA-Zа-яА-Я]/,
        { message: "Invalid email" }
      ),
    currentPassword: yup
      .string()
      .min(8, "Invalid password (8-64 characters)")
      .max(64, "Invalid password (8-64 characters)")
      .when(["newPassword", "repeatedPassword"], {
        is: (newPassword, repeatedPassword) => newPassword || repeatedPassword,
        then: (schema) => schema.required("You must enter your old password"),
      }),
    newPassword: yup
      .string()
      .min(8, "Invalid password (8-64 characters)")
      .max(64, "Invalid password (8-64 characters)")
      .when(["currentPassword", "repeatedPassword"], {
        is: (currentPassword, repeatedPassword) =>
          currentPassword || repeatedPassword,
        then: (schema) => schema.required("Enter a new password"),
      }),
    repeatedPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords don't match")
      .when(["currentPassword", "newPassword"], {
        is: (currentPassword, newPassword) => currentPassword || newPassword,
        then: (schema) => schema.required("Confirm new password"),
      }),
  },
  [
    ["newPassword", "repeatedPassword"],
    ["currentPassword", "repeatedPassword"],
    ["currentPassword", "newPassword"],
  ]
);

export const settingsModalSchemaUK = yup.object().shape(
  {
    name: yup.string().max(32, "Це дуже довге ім'я"),
    email: yup
      .string()
      .required("Тут має бути ваша електронна пошта")
      .matches(
        /\w{0}[0-9a-zA-Zа-яА-Я]+@\w{0}[a-zA-Zа-яА-Я]+\.\w{0}[a-zA-Zа-яА-Я]/,
        { message: "Невалідна пошта" }
      ),
    currentPassword: yup
      .string()
      .min(8, "Неприпустимий пароль (від 8 до 64 символів)")
      .max(64, "Неприпустимий пароль (від 8 до 64 символів)")
      .when(["newPassword", "repeatedPassword"], {
        is: (newPassword, repeatedPassword) => newPassword || repeatedPassword,
        then: (schema) =>
          schema.required("Вам потрібно ввести свій старий пароль"),
      }),
    newPassword: yup
      .string()
      .min(8, "Неприпустимий пароль (від 8 до 64 символів)")
      .max(64, "Неприпустимий пароль (від 8 до 64 символів)")
      .when(["currentPassword", "repeatedPassword"], {
        is: (currentPassword, repeatedPassword) =>
          currentPassword || repeatedPassword,
        then: (schema) => schema.required("Введіть новий пароль"),
      }),
    repeatedPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Паролі не співпадають")
      .when(["currentPassword", "newPassword"], {
        is: (currentPassword, newPassword) => currentPassword || newPassword,
        then: (schema) => schema.required("Підтвердіть новий пароль"),
      }),
  },
  [
    ["newPassword", "repeatedPassword"],
    ["currentPassword", "repeatedPassword"],
    ["currentPassword", "newPassword"],
  ]
);
