import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  appRoutes,
} from 'constants/routes';
import {
  refreshUser
} from 'redux/auth/api';
import {
  selectUserAuthentication,
} from 'redux/auth/selectors'
import UserMenu from "components/UserMenu/UserMenu";


const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

const App = () => {

  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <header>
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
        </header>
        <main>
          <Suspense fallback={'Loading...'}>
            <Routes>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
    </div>
    
  );
};

export default App;
