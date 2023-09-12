import React from 'react';
import style from './RegistrationPage.module.css';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/api';
import { Button, TextField } from '@mui/material';

const RegistrationPage = () => {
  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    
    event.preventDefault();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;
    
    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(formData));
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>
          <TextField
            margin="normal"
            required
            type="text"
            label="Name"
            name="userName"
            placeholder="Enter your name..."
          />
        </label>
        <label>
          <TextField
            margin="normal"
            required
            type="email"
            label="Email"
            name="userEmail"
            placeholder="Enter your email..."
          />
        </label>
        <label>
          <TextField
            margin="normal"
            required
            type="password"
            label="Password"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
          />
        </label>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Register
        </Button>
      </form>
    </div>
  )
}

export default RegistrationPage