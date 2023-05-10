import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { useFetchContactsQuery, useEditContactMutation } from 'redux/index';
import { submitSchema } from 'services';
import { useMemo } from 'react';
import css from './EditContact.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const EditContact = () => {
  const { contactId } = useParams();
  const { data: contacts } = useFetchContactsQuery();
  const [editContact] = useEditContactMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: submitSchema,
    onSubmit: async values => {
      const isIncluded = contacts.some(
        contact =>
          contact.name.toLowerCase() === values.name.toLowerCase().trim()
      );
      if (isIncluded) {
        formik.resetForm();
        toast.error(`${values.name.trim()} is already in contacts`);
        return;
      }

      await editContact({
        name: values.name.trim(),
        number: values.number.trim(),
        id: contactId,
      });
      toast.success('Contact successfully edited!');
      formik.resetForm();
      setTimeout(() => navigate('/contacts'), 500);
    },
  });

  const filtredContact = useMemo(
    () => contacts.filter(contact => contact.id === contactId),
    [contactId, contacts]
  );

  return (
    <div>
      <h2 className={css.title}>Edit contact</h2>
      <div className={css.contactContainer}>
        <p>Name: {filtredContact[0].name}</p>
        <p>Number: {filtredContact[0].number}</p>
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
        />
        <TextField
          id="number"
          label="New phone number"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="number"
          type="tel"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button sx={{ width: 1, color: 'black' }} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditContact;