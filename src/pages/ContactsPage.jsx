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
  const { data, isLoading, isError } = useFetchContactsQuery();

  const {
    showAddContact,
    setShowAddContact,
    showEditContact,
    setShowEditContact,
    contactId,
  } = useShowModalContext();

  useEffect(() => {
    if (isError) toast.error('Something wrong. Try to reload your page!');
  }, [isError]);

  const contact = useMemo(() => {
    if (data) {
      return data.find(contact => contact.id === contactId);
    }
  }, [contactId, data]);

  return (
    <Box sx={{ pt: theme => theme.spacing(2) }}>
      <Paper elevation={5} sx={{ p: theme => theme.spacing(4) }}>
        {!isLoading && <ContactList contacts={data} />}
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
      </Paper>
      <SimpleBackdrop isLoading={isLoading} />
    </Box>
  );
};

export default ContactsPage;
