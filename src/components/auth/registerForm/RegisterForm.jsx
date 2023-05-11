import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { useUser } from 'services';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThreeDots } from 'react-loader-spinner';

export default function RegForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading } = useUser();
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box sx={{ mt: 8, mx: 'auto', width: 400 }}>
      <form onSubmit={onSubmit}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="name"
          value={name}
          onChange={({ currentTarget: { value } }) => setName(value.trim())}
          autoComplete="name"
          required
        />
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