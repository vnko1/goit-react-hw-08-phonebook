import { lazy, useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import { selectTheme, setTheme } from 'redux/index';
import Error from './error/Error';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const EditContactPage = lazy(() => import('../pages/EditContactPage'));
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

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        dispatch(setTheme());
      },
    }),
    [dispatch]
  );

  const themeMode = useMemo(() => createTheme(getDesignTokens(theme)), [theme]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeMode}>
        <CssBaseline>
          {isRefreshing ? (
            <ImageLoader />
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
                  <Route path="*" element={<Error />} />
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
