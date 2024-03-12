import * as yup from "yup";


export const emailFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Here must be your e-mail")
    .email("Invalid email"),
});

export const emailFormSchemaUK = yup.object().shape({
  email: yup
    .string()
    .required("Тут повинна бути ваша електронна пошта")
    .email("Невалідна пошта"),
});
