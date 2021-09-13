import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const SelectButton = ({ title, handleChange, name, values }) => {
  const showElement = useRef();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    const { value, sentence } = event.currentTarget.dataset;
    handleChange(value, sentence);
  };

  return (
    <div className='group-buttons' ref={showElement}>
      <Button
        aria-controls='fade-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        {title}
      </Button>

      <Menu
        id='fade-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        getContentAnchorEl={null}
        // modify popup to go below the menu in materialUI
        // https://medium.com/cloud-native-the-gathering/material-ui-how-to-change-a-menus-menuitems-anchor-to-popover-below-instead-of-over-ab222e175cfd
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {values.map((element, index) => (
          <MenuItem
            key={index}
            data-sentence={element.sentence}
            data-value={element.value}
            name={name}
            onClick={handleClose}
          >
            {element.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SelectButton;
