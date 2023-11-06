import { Navigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import Home from '../pages/Home';

const ProtectedRoute = () => {
  const { auth } = useAuthContext();
  const { token } = auth;

  return <>{token ? <Home /> : <Navigate to="/" />}</>;
};

export default ProtectedRoute;
