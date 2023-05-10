import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectAuthError,
  selctUser,
  selectToken,
} from 'redux/index';

export const useUser = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectAuthError);
  const user = useSelector(selctUser);
  const token = useSelector(selectToken);

  return { user, isLoggedIn, isRefreshing, isLoading, error, token };
};
