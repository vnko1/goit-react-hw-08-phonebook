import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUser } from 'services';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useUser();
  // const location = useLocation();

  return isLoggedIn & !isRefreshing ? Component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;

// <Navigate to={redirectTo} state={location} />;
