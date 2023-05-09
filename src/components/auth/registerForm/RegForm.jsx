import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function RegForm() {
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
        <Button sx={{ width: 1, color: 'black' }} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
