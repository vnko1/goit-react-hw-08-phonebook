import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon() {
  return (
    <Box sx={{ mt: 8, mx: 'auto', width: 400 }}>
      <form>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="name"
          autoComplete="name"
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="email"
          type="email"
          autoComplete="username"
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{ width: 1, mb: 2 }}
          name="password"
          type="password"
          autoComplete="new-password"
        />
      </form>
    </Box>
  );
}
