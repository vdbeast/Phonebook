import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/api';
import { selectUserData } from 'redux/auth/selectors';
import style from './UserMenu.module.css'
import { Button } from '@mui/material';

const UserMenu = () => {

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };
    return (
      <div className={style.menu_container}>
        <div className={style.desc}>
          <span>Hello, {userData.name}</span>
          <span>{userData.email}</span>
        </div>
        <Button variant="contained" color="error" size="medium" onClick={handleLogOut}>Log Out</Button>
      </div>
    )
}



export default UserMenu