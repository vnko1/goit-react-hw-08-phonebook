import { useEffect, useMemo } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/index';
import { ContactForm, ContactList } from 'components/phoneBook';
import { useShowModalContext } from 'context/ContactModalContext';
import ContactModal from 'components/modalWindow/ContactModal';
import EditContact from 'components/phoneBook/editContact/EditContact';

const ContactsPage = () => {
  const { data, isLoading, isError, error } = useFetchContactsQuery();
  const {
    showAddContact,
    setShowAddContact,
    showEditContact,
    setShowEditContact,
    contactId,
  } = useShowModalContext();

  useEffect(() => {
    if (isError && error?.originalStatus === 404) {
      toast.error('Something wrong! Try to reload your');
      return;
    }
    if (isError) toast.error(error);
  }, [error, isError]);

  const contact = useMemo(() => {
    if (data) {
      return data.find(contact => contact.id === contactId);
    }
  }, [contactId, data]);

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
          <div
            style={{
              height: '100vh',
              overflow: 'scroll',
              position: 'relative',
            }}
          >
            {!isLoading && !isError && <ContactList contacts={data} />}
            {/* {isLoading && <Loader />} */}
          </div>
        </div>
      </div>
      <ContactModal open={showAddContact} showModal={setShowAddContact}>
        <ContactForm />
      </ContactModal>
      <ContactModal open={showEditContact} showModal={setShowEditContact}>
        {!!contact && (
          <EditContact
            contactId={contact.id}
            number={contact.number}
            name={contact.name}
          />
        )}
      </ContactModal>
      <Toaster />
    </section>
  );
};

export default ContactsPage;
