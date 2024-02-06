import { DayNumber, Percent, ButtonXmark } from './Day.styled';
import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DayGeneralStats from '../DayGeneralStats/DayGeneralStats';

import { ReactComponent as Xmark } from '../../../assets/icons/outline-desc.svg';

/**
 * @typedef {import('@mui/material/Popover').PopoverProps} PopoverProps
 * @typedef {import('@mui/material/Button').ButtonProps} ButtonProps
 */

/**
 * @param {Object} props
 * @param {ButtonProps} props.buttonProps
 * @param {PopoverProps} props.popoverProps
 */

const Day = ({ buttonProps, popoverProps, item, index, monthName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { waterVolumePercentage } = item;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        style={{
          background: 'white',
          borderRadius: '50%',
          minWidth: '34px',
          minHeight: '34px',
          padding: '0px',
          border: '1px solid',
          borderColor: waterVolumePercentage >= 100 ? 'white' : 'orange',
        }}
        {...buttonProps}
      >
        <DayNumber>{index + 1}</DayNumber>
      </Button>
      <Percent>{waterVolumePercentage}%</Percent>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        {...popoverProps}
      >
        <Box
          sx={{ p: 2 }}
          style={{
            minWidth: '292px',
            minHeight: '188px',
            padding: '24px 16px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px rgba(64, 123, 255, 0.3)',
          }}
        >
          <ButtonXmark onClick={handleClose}>
            <Xmark />
          </ButtonXmark>
          <DayGeneralStats item={item} index={index} monthName={monthName} />
        </Box>
      </Popover>
    </div>
  );
};

export default Day;
