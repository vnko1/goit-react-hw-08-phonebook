import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThreeDots } from 'react-loader-spinner';
import { useUser } from 'services';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading } = useUser();
  const dispatch = useDispatch();
  //

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
          autoComplete="username"
          value={email}
          onChange={({ currentTarget: { value } }) => setEmail(value.trim())}
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
          autoComplete="new-password"
          required
        />
        <Button
          sx={{ width: 1, color: 'black' }}
          type="submit"
          disabled={isLoading}
        >
          {!isLoading ? (
            'SUBMIT'
          ) : (
            <ThreeDots
              height="30"
              width="30"
              radius="9"
              color="grey"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          )}
        </Button>
      </form>
    </Box>
  );
}
