import PropTypes from 'prop-types';

import { useShowModalContext } from 'context/ContactModalContext';
import { useDeleteContactMutation } from 'redux/index';
import { IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Contact = ({ name, phone, id }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactMutation();
  const { setContactId, setShowEditContact } = useShowModalContext();

  return (
    <ListItem>
      <ListItemText>
        <Typography sx={{ display: 'flex', mb: 1 }} variant="body1">
          <PersonIcon sx={{ mr: 2 }} />
          {name}
        </Typography>
        <Typography sx={{ display: 'flex' }} variant="body1">
          <PhoneIcon sx={{ mr: 2 }} />
          {phone}
        </Typography>
      </ListItemText>

      <IconButton
        aria-label="edit"
        onClick={() => {
          setContactId(id);
          setShowEditContact(true);
        }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        sx={{ ml: theme => theme.spacing(1) }}
        aria-label="delete"
        onClick={() => deleteContacts(id)}
        disabled={isLoading}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
