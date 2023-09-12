import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/api';
import { selectUserData } from 'redux/auth/selectors';

const UserMenu = () => {

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutUser());
  };
    return (
        <div>
          <span>Hello, {userData.name}</span>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default UserMenu