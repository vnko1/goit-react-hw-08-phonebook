import { useEffect, Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/index';
import { ContactForm, ContactList, Filter, Loader } from 'components/phoneBook';
import { Outlet } from 'react-router-dom';

const ContactsPage = () => {
  const { data, isLoading, isError, error } = useFetchContactsQuery();

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <section style={{ position: 'relative' }}>
      <h1 style={{ marginBottom: 40, textTransform: 'uppercase' }}>
        Your contacts
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingBottom: 20,
        }}
      >
        <div>
          <ContactForm />
          <Filter />
        </div>
        <div>
          <div style={{ height: '100vh', overflow: 'scroll' }}>
            {!isLoading && !isError && <ContactList contacts={data} />}
          </div>
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
      {isLoading && <Loader />}
      <Toaster />
    </section>
  );
};

export default ContactsPage;
