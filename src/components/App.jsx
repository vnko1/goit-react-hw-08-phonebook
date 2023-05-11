import { lazy, useEffect, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/operations';
import { useUser } from 'services';
import { ColorModeContext } from 'context/colorModeContext';
import { ImageLoader } from './phoneBook';
import SharedLayout from './sharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import toast, { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getDesignTokens } from 'theme/getDesignToken';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const EditContactPage = lazy(() => import('../pages/EditContactPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));

export const App = () => {
  const [mode, setMode] = useState('light');
  const { isRefreshing, error, isLoading } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && !isLoading) toast.error(error);
  }, [error, isLoading]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          {isRefreshing ? (
            <ImageLoader />
          ) : (
            <>
              {' '}
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
                  >
                    <Route
                      path=":contactId"
                      element={
                        <PrivateRoute
                          redirectTo="/login"
                          component={<EditContactPage />}
                        />
                      }
                    />
                  </Route>
                  <Route
                    path="/register"
                    element={<RestrictedRoute component={<RegisterPage />} />}
                  />
                  <Route
                    path="/login"
                    element={<RestrictedRoute component={<LogInPage />} />}
                  />
                </Route>
              </Routes>
              <Toaster />
            </>
          )}
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
