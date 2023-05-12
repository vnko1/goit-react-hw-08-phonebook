import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const SimpleBackdrop = ({ isLoading }) => {
  return (
    <Backdrop
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        bgcolor: theme => theme.palette.background.paper,
      }}
      style={{ opacity: 0.95 }}
      open={isLoading}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

SimpleBackdrop.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default SimpleBackdrop;
