import * as Yup from "yup";

export const addWaterSchema = Yup.object({
  waterAmount: Yup.string()
    .required("Required")
    .max(15, "Must be 15 characters or less")
    .matches(/\d{2,}/g),
  date: Yup.string()
    .required("Required")
    .matches(/^(\d{2}:\d{2})$/, {
      message: "Entered date must match following format hh:mm (10:25)",
    }),
});

export const addWaterSchemaUK = Yup.object({
  waterAmount: Yup.string()
    .required("Обов'язково")
    .max(15, "Має бути не більше 15 символів")
    .matches(/\d{2,}/g),
  date: Yup.string()
    .required("Обов'язково")
    .matches(/^(\d{2}:\d{2})$/, {
      message:
        "Введена дата повинна відповідати наступному формату гг:хх (10:25)",
    }),
});
