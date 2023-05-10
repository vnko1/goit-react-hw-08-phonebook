import { createPortal } from 'react-dom';
import css from './ModalWindow.module.css';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ children }) => {
  return createPortal(
    <div className={css['Modal__backdrop']}>
      <div className={css['Modal__content']}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
