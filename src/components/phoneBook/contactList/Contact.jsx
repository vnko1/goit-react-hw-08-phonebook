import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillContacts } from 'react-icons/ai';
import { ThreeDots } from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/index';
import css from './ContactList.module.css';

export const Contact = ({ name, phone, id }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactMutation();
  console.log(id);
  return (
    <div className={css.container}>
      <div className={css.itemContainer}>
        <AiFillContacts />
        <p>{`${name}: ${phone}`}</p>
      </div>
      <Link to={`${id}`}>Edit contact</Link>
      <button
        className={css.button}
        type="button"
        onClick={() => deleteContacts(id)}
        disabled={isLoading}
      >
        {isLoading ? (
          <ThreeDots
            height="18"
            width="40"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        ) : (
          'Delete'
        )}
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
