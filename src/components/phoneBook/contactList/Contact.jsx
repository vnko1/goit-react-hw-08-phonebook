import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useShowModalContext } from 'context/ContactModalContext';
import { useDeleteContactMutation } from 'redux/index';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import css from './ContactList.module.css';

export const Contact = ({ name, phone, id }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactMutation();
  const { setContactId, setShowEditContact } = useShowModalContext();

  // useEffect(() => {}, [id, setContactId]);

  return (
    <>
      <div className={css.container}>
        <div className={css.itemContainer}>
          <div className={css.textContainer}>
            <Typography sx={{ display: 'flex', mb: 1 }} variant="body1">
              <PersonIcon sx={{ mr: 2 }} />
              {name}
            </Typography>
            <Typography sx={{ display: 'flex' }} variant="body1">
              <PhoneIcon sx={{ mr: 2 }} />
              {phone}
            </Typography>
          </div>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="small button group">
            <Button
              onClick={() => {
                setContactId(id);
                setShowEditContact(true);
              }}
            >
              Edit contact
            </Button>
            <Button onClick={() => deleteContacts(id)} disabled={isLoading}>
              Delete contact
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
