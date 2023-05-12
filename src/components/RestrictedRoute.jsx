import { Navigate } from 'react-router-dom';
import { useUser } from 'services';
import PropTypes from 'prop-types';

const RestrictedRoute = ({ component: Component }) => {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <Navigate to="/" /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default RestrictedRoute;
