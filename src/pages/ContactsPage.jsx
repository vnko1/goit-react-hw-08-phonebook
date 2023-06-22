import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/index';
import { ContactForm, ContactList } from 'components/phoneBook';
import { useShowModalContext } from 'context/ContactModalContext';
import ContactModal from 'components/modalWindow/ContactModal';
import EditContact from 'components/phoneBook/editContact/EditContact';
import { Box, Paper } from '@mui/material';
import SimpleBackdrop from 'components/phoneBook/loader/SimpleBackdropLoader';

const ContactsPage = () => {
  const { data, isLoading, isError, isSuccess, error } =
    useFetchContactsQuery();

  const {
    showAddContact,
    setShowAddContact,
    showEditContact,
    setShowEditContact,
    contactId,
  } = useShowModalContext();

  useEffect(() => {
    if (isError && error.status !== 401)
      toast.error(`Something wrong. Try to reload your page! ${error.status}`);
  }, [error, isError]);

  const contact = useMemo(() => {
    if (isSuccess) {
      return data.contacts.find(contact => {
        return contact._id === contactId;
      });
    }
  }, [contactId, data, isSuccess]);

  return (
    <Box sx={{ pt: theme => theme.spacing(2) }}>
      <Paper elevation={5} sx={{ p: theme => theme.spacing(4) }}>
        {isSuccess && <ContactList contacts={data.contacts} />}
        <ContactModal open={showAddContact} showModal={setShowAddContact}>
          <ContactForm />
        </ContactModal>
        <ContactModal open={showEditContact} showModal={setShowEditContact}>
          {!!contact && (
            <EditContact
              contactId={contact._id}
              phone={contact.phone}
              name={contact.name}
              email={contact.email}
            />
          )}
        </ContactModal>
      </Paper>
      <SimpleBackdrop isLoading={isLoading} />
    </Box>
  );
};

export default ContactsPage;
