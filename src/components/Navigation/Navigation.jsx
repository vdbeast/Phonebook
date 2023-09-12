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

const Navigation = () => {

  const authenticated = useSelector(selectUserAuthentication);

  return (
      <div>
          <nav className="nav">
            <NavLink to={HOME_ROUTE}>Home</NavLink>
  
            {authenticated ? (
              <>
                <NavLink to={CONTACTS_ROUTE}>Phonebook</NavLink>
                <UserMenu/>
              </>
            ) : (
              <>
                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                <NavLink to={REGISTER_ROUTE}>Register</NavLink>
              </>
            )}
          </nav>
      </div>
      
  )
}

export default Navigation