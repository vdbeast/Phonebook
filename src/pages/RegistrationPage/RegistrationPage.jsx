import React from 'react';
import style from './RegistrationPage.module.css';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/api';

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
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>
          <span>Username:</span>
          <input
            type="text"
            name="userName"
            placeholder="Enter your name..."
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="userEmail"
            placeholder="Enter your email..."
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="userPassword"
            placeholder="Enter your password..."
            minLength={7}
            required
          />
        </label>
        <button type="submit">Registration</button>
      </form>
    </div>
  )
}

export default RegistrationPage