import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { selectFilter } from 'redux/index';
import { Contact } from './Contact';
import { Collapse, List, Typography } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

const ContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);

  const filtredContacts = useMemo(
    () =>
      contacts.filter(
        contact =>
          contact.phone.toLowerCase().includes(filter.toLowerCase()) ||
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.email.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <Box>
      {filtredContacts.length === 0 ? (
        <Typography variant="h2">Add your first contact</Typography>
      ) : (
        <Typography variant="h2" sx={{ mb: theme => theme.spacing(3) }}>
          Your contacts
        </Typography>
      )}
      <List>
        <TransitionGroup>
          {filtredContacts.map(({ _id, name, phone, email }) => {
            return (
              <Collapse key={_id}>
                <Contact name={name} phone={phone} email={email} id={_id} />
              </Collapse>
            );
          })}
        </TransitionGroup>
      </List>
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ _id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export { ContactList };
