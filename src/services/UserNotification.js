import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const toastSettings = {
  autoClose: 4000,
  position: "top-right",
  theme: "colored",
};

export const toastFulfild = (notification) =>
  toast.success(notification, toastSettings);

export const toastRejected = (notification) =>
  toast.error(notification, toastSettings);
