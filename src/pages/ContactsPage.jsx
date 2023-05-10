import { useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/index';
import { ContactForm, ContactList, Filter, Loader } from 'components/phoneBook';

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
          <div
            style={{
              height: '100vh',
              overflow: 'scroll',
              position: 'relative',
            }}
          >
            {!isLoading && !isError && <ContactList contacts={data} />}
            {isLoading && <Loader />}
          </div>
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>

      <Toaster />
    </section>
  );
};

export default ContactsPage;
