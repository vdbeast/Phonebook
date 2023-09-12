import { Button } from '@mui/material'
import { CONTACTS_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/routes'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectUserAuthentication, selectUserData } from 'redux/auth/selectors'
import style from './HomePage.module.css'

const HomePage = () => {

  const authenticated = useSelector(selectUserAuthentication);
  const userData = useSelector(selectUserData);

  return (
    <div className={style.home_container}>
      <h1 className={style.title}>Welcome to PhoneBook</h1>
      <nav className={style.nav}>
        {authenticated ? (
          <>
            <p className={style.user_name}>{userData.name}</p>
            <Button variant="contained">
              <NavLink to={CONTACTS_ROUTE}>Phonebook</NavLink>
            </Button>
          </>
        ) : (
            <>
              <Button variant="contained">
                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </Button>
              <Button variant="contained">
                <NavLink to={REGISTER_ROUTE}>Register</NavLink>
              </Button>
          </>
        )}
      </nav>
    </div>
  )
}

export default HomePage