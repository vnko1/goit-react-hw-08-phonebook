import { Navigate } from 'react-router-dom';
import { useUser } from 'services';

const RestrictedRoute = ({ component: Component }) => {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <Navigate to="/contacts" /> : Component;
};

export default RestrictedRoute;
