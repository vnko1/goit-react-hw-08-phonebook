import { Navigate } from 'react-router-dom';
import { useUser } from 'services';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useUser();

  return isLoggedIn & !isRefreshing ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
