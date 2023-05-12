import { lazy, useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/operations';
import { useUser } from 'services';

import SharedLayout from './sharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from 'theme/getDesignToken';
import { selectTheme } from 'redux/index';
import Error from 'pages/ErrorPage';
import ShowModalProvider from 'context/ContactModalContext';
import SimpleBackdrop from './phoneBook/loader/SimpleBackdropLoader';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));

export const App = () => {
  const { isRefreshing, error, isLoading } = useUser();
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && !isLoading) toast.error(error);
  }, [error, isLoading]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const themeMode = useMemo(() => createTheme(getDesignTokens(theme)), [theme]);

  return (
    <ShowModalProvider>
      <ThemeProvider theme={themeMode}>
        <CssBaseline>
          {isRefreshing ? (
            <SimpleBackdrop isLoading={isRefreshing} />
          ) : (
            <>
              <Routes>
                <Route path="/" element={<SharedLayout />}>
                  <Route index element={<HomePage />} />
                  <Route
                    path="/contacts"
                    element={
                      <PrivateRoute
                        redirectTo="/login"
                        component={<ContactsPage />}
                      />
                    }
                  ></Route>
                  <Route
                    path="/register"
                    element={<RestrictedRoute component={<RegisterPage />} />}
                  />
                  <Route
                    path="/login"
                    element={<RestrictedRoute component={<LogInPage />} />}
                  />
                  <Route path="*" element={<Error />} />
                </Route>
              </Routes>
              <Toaster position="bottom-right" reverseOrder={true} />
            </>
          )}
        </CssBaseline>
      </ThemeProvider>
    </ShowModalProvider>
  );
};
