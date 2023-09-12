import React from 'react';
import style from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/api';
import { Button, TextField } from '@mui/material';

const LoginPage = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {

    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;
    
    const formData = {
      email,
      password,
    };

    dispatch(loginUser(formData));
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
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
          Login
        </Button>
      </form>
    </div>
  )
}

export default LoginPage