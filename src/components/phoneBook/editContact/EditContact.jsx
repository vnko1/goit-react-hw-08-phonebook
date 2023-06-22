import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useShowModalContext } from 'context/ContactModalContext';
import { useEditContactMutation } from 'redux/index';
import { changeSchema, createObj } from 'services';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import css from './EditContact.module.css';

const EditContact = ({ contactId, name, phone }) => {
  const [editContact, { isSuccess, error }] = useEditContactMutation();
  const { setShowEditContact } = useShowModalContext();

  const formik = useFormik({
    initialValues: { name, phone },
    validationSchema: changeSchema,
    onSubmit: async values => {
      console.log(1);
      if (values.name.trim() === '' || values.phone.trim() === '') return;

      const newName = values.name.trim();
      const newPhone = values.phone.trim();

      await editContact(
        createObj({
          newName,
          newPhone,
          id: contactId,
          name,
          phone,
        })
      );

      formik.resetForm();
      setTimeout(() => setShowEditContact(false));
    },
  });

  useEffect(() => {
    if (isSuccess) toast.success('Contact successfully edited!');
    if (error) toast.error(error);
  }, [isSuccess, error]);

  return (
    <>
      <h2 className={css.title}>Edit contact</h2>
      <div className={css.contactContainer}>
        <Typography sx={{ display: 'flex', mb: 1 }} variant="body1">
          <PersonIcon sx={{ mr: 2 }} />
          {name}
        </Typography>
        <Typography sx={{ display: 'flex' }} variant="body1">
          <PhoneIcon sx={{ mr: 2 }} />
          {phone}
        </Typography>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          label="New name"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          autoComplete="off"
        />
        <TextField
          id="phone"
          label="New phone number"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="phone"
          type="tel"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          autoComplete="off"
        />
        <Button
          sx={{
            width: 1,
            color: 'black',
            bgcolor: theme => theme.palette.secondary.light,
          }}
          type="submit"
          disabled={!(formik.values.name || formik.values.phone)}
        >
          Save
        </Button>
      </form>
    </>
  );
};

EditContact.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default EditContact;
