import * as yup from "yup";

export const settingsModalSchema = yup.object().shape(
  {
    name: yup.string().max(32, "That's a very long name"),
    email: yup
      .string()
      .required("Here must be your e-mail")
      .email("Invalid email"),
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
