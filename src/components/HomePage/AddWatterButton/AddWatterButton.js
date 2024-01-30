import React, { useState } from 'react';
import { SettingsModal } from 'components';
import { Button } from './AddWatterButton.styled';

const AddWaterButton = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <Button type="button" onClick={handleClick}>
        + Add Water
      </Button>
      {showComponent && <SettingsModal />}
    </div>
  );
};

export default AddWaterButton;
