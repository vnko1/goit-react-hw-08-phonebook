import toast, { Toaster } from 'react-hot-toast';
import { lazy, useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, useCurrentMutation, refresh } from 'redux/index';
import { getDesignTokens } from 'theme/getDesignToken';
import ShowModalProvider from 'context/ContactModalContext';
import SharedLayout from './sharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import ErrorPage from 'pages/ErrorPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SimpleBackdrop from './phoneBook/loader/SimpleBackdropLoader';
import { useUser } from 'services';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));

export const App = () => {
  const theme = useSelector(selectTheme);
  const { token } = useUser();
  const dispatch = useDispatch();
  const [refreshStatus, { isLoading, isError, error }] = useCurrentMutation();

  useEffect(() => {
    if (isError && error.status !== 401)
      toast.error(`Something wrong. Try to reload your page! ${error.status}`);
  }, [error, isError]);

  useEffect(() => {
    (async () => {
      if (token) {
        const { data } = await refreshStatus();
        if (!isError) dispatch(refresh(data));
      }
    })();
  }, [dispatch, isError, refreshStatus, token]);

  const themeMode = useMemo(() => createTheme(getDesignTokens(theme)), [theme]);

  return (
    <ShowModalProvider>
      <ThemeProvider theme={themeMode}>
        <CssBaseline>
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
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
          <Toaster position="bottom-right" reverseOrder={true} />
          <SimpleBackdrop isLoading={isLoading} />
        </CssBaseline>
      </ThemeProvider>
    </ShowModalProvider>
  );
};
