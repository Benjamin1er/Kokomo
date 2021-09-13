import Modal from "@material-ui/core/Modal";
import { useState } from "react";

import "./Age.css";

const Age = () => {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const body = (
    <div className='modal'>
      <button className='capice' onClick={handleClose}>
        I certify that I am of age
      </button>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default Age;
