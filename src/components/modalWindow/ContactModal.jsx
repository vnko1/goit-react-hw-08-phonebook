import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  outline: 0,
};

const ContactModal = ({ showModal, open, children }) => {
  const handleClose = () => showModal(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
};

ContactModal.propTypes = {
  showModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
export default ContactModal;
