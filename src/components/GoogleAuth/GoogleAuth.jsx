// import React from "react";

// const GoogleButton = () => {
//     const onClickGoogleBtn = () => {
//         window.location.assign(
//           'https://water-tracker-backend-0wax.onrender.com/api/user/google',
//         );
//       };
//   return (
//         <button
//           className="button"
//           onClick={onClickGoogleBtn}
//         >
//           Google Authentication
//         </button>
//   );
// };

// export default GoogleButton;

// import { Navigate, useSearchParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setVerify } from "../../redux/userSlice";

// const AuthGoogle = ({ redirectTo = "/" }) => {
//   const dispatch = useDispatch();
//   const [searchParams] = useSearchParams();
//   const token = searchParams.get("token");
//   console.log(token)

//   dispatch(setVerify(token));

//   return <Navigate to={redirectTo} />;
// };

// export default AuthGoogle;