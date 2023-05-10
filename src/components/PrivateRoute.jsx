import { Navigate } from 'react-router-dom';
import { useUser } from 'services';

const PrivateRoute = ({ component: Component }) => {
  const { isLoggedIn, isRefreshing } = useUser();

  return isLoggedIn & !isRefreshing ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
