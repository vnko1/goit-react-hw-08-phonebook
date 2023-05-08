import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/index';
import { ContactForm, ContactList, Filter } from './phoneBook';
import { Loader } from './phoneBook/loader/Loader';

export const App = () => {
  const { data, isLoading, isError, error } = useFetchContactsQuery();

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <section>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {!isLoading && !isError && <ContactList contacts={data} />}
        {isLoading && <Loader />}
        <Toaster />
      </div>
    </section>
  );
};
