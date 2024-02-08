import * as Yup from "yup";

export const addWaterSchema = Yup.object({
  waterAmount: Yup.string()
    .max(15, "Must be 15 characters or less")
    .matches(/\d{2,}/g)
    .required("Required"),
  date: Yup.string()
    .matches(/^(\d{2}:\d{2})$/, {
      message: "Entered date must match following format hh:mm (10:25)",
    })
    .required("Required"),
});
