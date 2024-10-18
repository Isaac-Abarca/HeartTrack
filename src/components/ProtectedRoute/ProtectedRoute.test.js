import { Navigate } from 'react-router-dom';

// Simulación de una función de autenticación
const useAuth = () => {
  const user = { loggedIn: false }; // Cambia a true si el usuario está autenticado
  return user && user.loggedIn;
};

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
