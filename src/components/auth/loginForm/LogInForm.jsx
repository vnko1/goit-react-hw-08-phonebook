import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import Box from '@mui/material/Box';

import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useUser } from 'services';
import { IconButton, Input, useTheme } from '@mui/material';
import FetchingLoader from 'components/phoneBook/loader/FetchingLoader';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
        <Input
          id="email"
          placeholder="Email"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="email"
          type="email"
          value={email}
          onChange={({ currentTarget: { value } }) => setEmail(value.trim())}
          autoComplete="off"
          required
        />
        <Input
          id="password"
          placeholder="Password"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={({ currentTarget: { value } }) => setPassword(value.trim())}
          autoComplete="off"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(state => !state)}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button
          sx={{ width: 1, bgcolor: theme.palette.secondary.light }}
          type="submit"
          disabled={isLoading}
          color="primary"
        >
          {!isLoading ? 'SUBMIT' : <FetchingLoader />}
        </Button>
      </form>
    </Box>
  );
};

export default LogInForm;
