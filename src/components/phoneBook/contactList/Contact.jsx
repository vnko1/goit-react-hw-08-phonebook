import PropTypes from 'prop-types';

import { useShowModalContext } from 'context/ContactModalContext';
import { useDeleteContactMutation } from 'redux/index';
import {
  IconButton,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Contact = ({ name, phone, email, id }) => {
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
        <Typography sx={{ display: 'flex' }} variant="body1">
          <EmailIcon sx={{ mr: 2 }} />
          {email}
        </Typography>
      </ListItemText>
      <Tooltip title="Edit contact" placement="bottom">
        <IconButton
          aria-label="edit"
          onClick={() => {
            setContactId(id);
            setShowEditContact(true);
          }}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete contact" placement="bottom">
        <IconButton
          sx={{ ml: theme => theme.spacing(1) }}
          aria-label="delete"
          onClick={() => deleteContacts(id)}
          disabled={isLoading}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
