import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/index';
import { submitSchema } from 'services';

const EditContact = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContacts] = useAddContactMutation();
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

      await addContacts({
        name: values.name.trim(),
        number: values.number.trim(),
      });
      toast.success('Contact successfully edited!');
      formik.resetForm();
    },
  });

  return (
    <Box sx={{ mt: 8, mx: 'auto', width: 400 }}>
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
          Add contact
        </Button>
      </form>
    </Box>
  );
};

export default EditContact;
