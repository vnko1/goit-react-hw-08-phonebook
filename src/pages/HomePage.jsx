import { useFetchContactsQuery } from 'redux/index';
import { useUser } from 'services';
import { Box, Paper, Typography } from '@mui/material';

const HomePage = () => {
  const { data, isSuccess } = useFetchContactsQuery();
  const {
    isLoggedIn,
    user: { name },
  } = useUser();

  return (
    <Box sx={{ pt: theme => theme.spacing(2) }}>
      <Paper sx={{ minHeight: 200, pt: 10 }}>
        <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
          WELCOME{isLoggedIn ? `, ${name}` : ''}!
        </Typography>
        {!isLoggedIn && (
          <Typography variant="h1">Please sign in to continue</Typography>
        )}
        {isLoggedIn && isSuccess && (
          <Typography variant="h1">
            You have {data.contacts.length} contacts in your phonebook
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default HomePage;
