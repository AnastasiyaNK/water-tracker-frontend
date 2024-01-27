import React from "react";
import { StyledMyDailyNormaModal } from "./MyDailyNormaModal.styled";

const MyDailyNormaModal = ({ toggleModal }) => {
  return (
    <StyledMyDailyNormaModal>
      <div className="settings-modal">
        <h2 className="title">My daily norma</h2>
        <button
          className="close-btn"
          type="button"
          onClick={() => toggleModal(false)}
        >
          X
        </button>
        <form>
          <div className="title-gender">
            <p className="title-gender-list">For girl:</p>
            <span className="calculator-water">V=(M*0,03) + (T*0,4)</span>
            <p className="title-gender-list">For man:</p>
            <span className="calculator-water">V=(M*0,04) + (T*0,6)</span>
          </div>
          <div className="title-content">
            <p className="title-content-water">
              <span className="title-text">*</span> V is the volume of the water
              norm in liters per day, M is your body weight, T is the time of
              active sports, or another type of activity commensurate in terms
              of loads (in the absence of these, you must set 0)
            </p>
          </div>

          <div>
            <h3 className="secondary-title">Calculate your rate:</h3>
            <div className="list-gender">
              <label>
                <input type="radio" name="gender" value="female" />
                <span className="gender-name">For woman</span>
              </label>
              <label>
                <input type="radio" name="gender" value="male" />
                <span className="gender-name">For man</span>
              </label>
            </div>
            <div>
              <p className="statistics-calculete">Your weight in kilograms:</p>
              <label>
                <input className="main-input" type="text" placeholder="0" />
              </label>
            </div>
            <div>
              <p className="statistics-calculete">
                The time of active participation in sports or other activities
                with a high physical. load in hours:
              </p>
              <label>
                <input className="main-input" type="text" placeholder="0" />
              </label>
            </div>
            <div>
              <p className="statistics-calculete">
                The required amount of water in liters per day:{" "}
                <span className="statistics-watar-day">1.8 L</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="secondary-subtitle">
              Write down how much water you will drink:
            </h3>
            <label>
              <input className="main-input-btn" type="text" placeholder="0" />
            </label>
          </div>
          <button className="settings-submit-btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </StyledMyDailyNormaModal>
  );
};

export default MyDailyNormaModal;
