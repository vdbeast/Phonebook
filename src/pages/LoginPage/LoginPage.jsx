import React from 'react';
import style from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/api';

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
      <h1>LoginPage</h1>
      <form className={style.form} onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage