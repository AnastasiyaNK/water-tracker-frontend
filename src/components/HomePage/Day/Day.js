import { useState } from "react";
import {
  StyledDayItemWrapper,
  Percent,
  ButtonXmark,
  StyledDayBtn,
} from "./Day.styled";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Typography";
import DayGeneralStats from "../DayGeneralStats/DayGeneralStats";
import { ReactComponent as Xmark } from "../../../assets/icons/outline-desc.svg";

const Day = ({ item, index, monthName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { waterVolumePercentage } = item;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <StyledDayItemWrapper>
      <StyledDayBtn
        aria-describedby={id}
       // variant="contained"
        onClick={handleClick}
        style={{
          border: waterVolumePercentage >= 100 ? "none" : "1px solid",
          borderColor: waterVolumePercentage >= 100 ? "transparent" : "#ff9d43",
        }}
      >
        {index + 1}
      </StyledDayBtn>
      <Percent>{waterVolumePercentage}%</Percent>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box
          sx={{ p: 2 }}
          style={{
            minWidth: "292px",
            minHeight: "188px",
            padding: "24px 16px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px 0px rgba(64, 123, 255, 0.3)",
          }}
        >
          <ButtonXmark onClick={handleClose}>
            <Xmark />
          </ButtonXmark>
          <DayGeneralStats item={item} index={index} monthName={monthName} />
        </Box>
      </Popover>
    </StyledDayItemWrapper>
  );
};

export default Day;
