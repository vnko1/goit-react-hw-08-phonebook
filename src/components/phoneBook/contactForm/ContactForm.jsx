import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { useTheme } from '@emotion/react';
import { useShowModalContext } from 'context/ContactModalContext';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/index';
import { useEffect } from 'react';
import { submitSchema } from 'services';
import FetchingLoader from '../loader/FetchingLoader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContacts, { isLoading, isSuccess }] = useAddContactMutation();
  const theme = useTheme();
  const { setShowAddContact } = useShowModalContext();

  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '' },
    validationSchema: submitSchema,
    onSubmit: async values => {
      const isIncluded = contacts.contacts.some(
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
        phone: values.phone.trim(),
        email: values.email.trim(),
      });
      setShowAddContact(false);
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
        id="phone"
        label="Phone number"
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
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        sx={{ width: 1, mb: 2 }}
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
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
