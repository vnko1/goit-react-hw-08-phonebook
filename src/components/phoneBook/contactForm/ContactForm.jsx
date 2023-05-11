import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/index';
import { submitSchema } from 'services';
import { useTheme } from '@emotion/react';
import FetchingLoader from '../loader/FetchingLoader';
import { useEffect } from 'react';

const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContacts, { isLoading, isSuccess }] = useAddContactMutation();
  const theme = useTheme();

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

      formik.resetForm();
    },
  });

  useEffect(() => {
    if (isSuccess) toast.success('Contact successfully added!');
  }, [isSuccess]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        label="Name"
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
        id="number"
        label="Phone number"
        variant="outlined"
        sx={{ width: 1, mb: 2 }}
        name="number"
        type="tel"
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
        autoComplete="off"
      />
      <Button
        sx={{ width: 1, bgcolor: theme.palette.secondary.light }}
        type="submit"
      >
        {!isLoading ? 'Add contact' : <FetchingLoader />}
      </Button>
    </form>
  );
};

export { ContactForm };
