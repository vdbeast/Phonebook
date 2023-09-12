import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from "components/UserMenu/UserMenu";
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from 'constants/routes';
import { selectUserAuthentication } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import style from './Navigation.module.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navigation = () => {

  const authenticated = useSelector(selectUserAuthentication);

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <Stack direction="row">
          <Button variant="contained">
            <NavLink to={HOME_ROUTE}>Home</NavLink>
          </Button>
              {authenticated ? (
                <>
              <Button variant="contained">
                <NavLink to={CONTACTS_ROUTE}>Phonebook</NavLink>
              </Button>
              <UserMenu className={ style.menu} />
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
            </Stack>
          </nav>
      </div>
      
  )
}

export default Navigation

