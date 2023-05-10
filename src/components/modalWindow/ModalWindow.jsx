import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import css from './ModalWindow.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        navigate('/contacts');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      navigate('/contacts');
    }
  };
  return createPortal(
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <Link to="/contacts" style={{ textDecoration: 'none' }}>
          <CloseIcon color="disabled" />
        </Link>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
