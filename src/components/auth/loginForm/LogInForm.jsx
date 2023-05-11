import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useUser } from 'services';
import { useTheme } from '@mui/material';
import FetchingLoader from 'components/phoneBook/loader/FetchingLoader';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading } = useUser();
  const dispatch = useDispatch();
  const theme = useTheme();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box sx={{ mt: 8, mx: 'auto', width: 400 }}>
      <form onSubmit={onSubmit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="email"
          type="email"
          value={email}
          onChange={({ currentTarget: { value } }) => setEmail(value.trim())}
          autoComplete="off"
          required
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="password"
          type="password"
          value={password}
          onChange={({ currentTarget: { value } }) => setPassword(value.trim())}
          autoComplete="off"
          required
        />
        <Button
          sx={{ width: 1, bgcolor: theme.palette.secondary.light }}
          type="submit"
          disabled={isLoading}
          color="secondary"
        >
          {!isLoading ? 'SUBMIT' : <FetchingLoader />}
        </Button>
      </form>
    </Box>
  );
}
