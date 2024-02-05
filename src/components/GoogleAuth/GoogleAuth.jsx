import React from "react";

const GoogleButton = () => {
    const onClickGoogleBtn = () => {
        window.location.assign(
          'https://water-tracker-backend-0wax.onrender.com/api/user/google',
        );
      };
  return (
        <button
          className="button"
          onClick={onClickGoogleBtn}
        >
          Google Authentication
        </button>
  );
};

export default GoogleButton;
