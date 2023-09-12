import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/api';
import { selectUserData } from 'redux/auth/selectors';
import style from './UserMenu.module.css'

const UserMenu = () => {

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };
    return (
        <div className={style.menu_container}>
          <span>Hello, {userData.name}</span>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default UserMenu