import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useFetchContactsQuery } from 'redux/index';
import toast, { Toaster } from 'react-hot-toast';
import SharedLayout from './sharedLayout/SharedLayout';
import RestrictedRoute from './RestrictedRoute';

import { ContactForm, ContactList, Filter } from './phoneBook';
import { Loader } from './phoneBook/loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const { data, isLoading, isError, error } = useFetchContactsQuery();

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
      </Route>
    </Routes>
  );

  // return (
  //   <section>
  //     <div className="container">
  //       <h1>Phonebook</h1>
  //       <ContactForm />
  //       <h2>Contacts</h2>
  //       <Filter />
  //       {!isLoading && !isError && <ContactList contacts={data} />}
  //       {isLoading && <Loader />}
  //       <Toaster />
  //     </div>
  //   </section>
  // );
};
