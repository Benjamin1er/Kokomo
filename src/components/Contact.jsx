import { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)

  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
  }

  return (
    <div className='contact-container'>
      <h3 className="contact-title">Contact us!</h3>
      <form className='contact-form'>
        <div className='question '>
          <label><h4>Firstname :</h4>
            <input className='contact-input contact-firstname'
              type="text"
              name="firtName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ugolini"
            />
          </label>
        </div>
        <div className='question'>
          <label><h4>Lastname :</h4>
            <input className='contact-input'
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Maria"
            />
          </label>
        </div>
        <div className='question'>
          <label> <h4>Email :</h4>
            <input className='contact-input'
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ugolini.maria@mail.com"
            />
          </label>
        </div>

        <div className='question'>
          <label><h4>Message :</h4></label>
          <textarea className="contact-message"
            type="Message"
            name="c_content"
            id="c_content"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="35"
            rows="7"></textarea>
        </div>

        <div className='question button-center'>
          <label>
            <input className="submit-button"
              type="submit"
              name="submit"
              value="Submit"
              onClick={handleOpen}
            />
          </label>
        </div>
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thank you for your feedback {lastName} {firstName}
        </Alert>
      </Snackbar>
    </div >
  )
}

export default Contact;
