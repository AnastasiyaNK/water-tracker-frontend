import React, { useState } from 'react';
import { AddWaterModal } from 'components';

const AddWaterButton = props => {
  const [showComponent, setShowComponent] = useState(false);

  const toggleModal = boolean => {
    return boolean === true ? setShowComponent(true) : setShowComponent(false);
  };
  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <button type="button" onClick={handleClick} style={props.style}>
        <p>+ Add Water</p>
      </button>

      {showComponent && <AddWaterModal toggleModal={toggleModal} />}
    </div>
  );
};

export default AddWaterButton;
