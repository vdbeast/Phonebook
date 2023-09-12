import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { appRoutes } from 'constants/routes';
import { refreshUser } from 'redux/auth/api';
import Navigation from "components/Navigation/Navigation";
import Loader from "components/Loader/Loader";

const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <header>
          <Navigation/>
        </header>
        <main>
          <Suspense fallback={<Loader/>}>
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
