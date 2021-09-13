import clsx from "clsx";
import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SelectBar from "./SelectBar";

import "./Footer.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Drawers({ handleChange }) {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    bottom: false,
  });

  const toggleDrawer = (menu, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [menu]: open });
  };

  const list = (menu) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: menu === "top" || menu === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(menu, false)}
      onKeyDown={toggleDrawer(menu, false)}
    >
      <List>
        <SelectBar onResultChange={handleChange} />
      </List>
    </div>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <Fragment key={anchor}>
          <Button className='burger' onClick={toggleDrawer(anchor, true)}>
            <FontAwesomeIcon icon={faBars} size='2x' />
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            variant='persistent'
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}
