import { Modal } from "components";
import { Home, Main } from "pages";
import { useState } from "react";
import { StyledMainContainer } from "styled";

function App() {
  const [modalActive, SetModalActive] = useState(true);
  return (
    <StyledMainContainer>
      <button className="open-btn" onClick={() => SetModalActive(true)}>
        Open modal
      </button>
      <Home />
      <Main />
      <Modal active={modalActive} SetActive={SetModalActive}>
        <div className="add-water">
          <p>Add water</p>
          <button
            className="close-modal"
            onClick={() => SetModalActive(false)}
          ></button>
        </div>
        <div className="value">
          <p className="choose">Choose a value:</p>
          <p className="amount">Amount of water:</p>
          <input type="text" />
          <input type="text" />
        </div>
      </Modal>
    </StyledMainContainer>
  );
}

export default App;
