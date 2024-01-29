import React from "react";
import { LoginForm, RegisterForm } from "components";
import ModalButton from "components/ModalButton/ModalButton";

const Home = () => {
  return (
    <div>
      {/* <button className="open-modal-btn" onClick={() => setIsOpenModal(true)}>
        Open modal
      </button>
      {isOpenModal && <AddWaterModal toggleModal={setIsOpenModal} />} */}
      <ModalButton />
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Home;
