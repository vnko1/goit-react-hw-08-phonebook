import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const CircularProgressLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 40,
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default CircularProgressLoader;
