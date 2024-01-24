import React, {FC} from 'react';
import { Navigate} from 'react-router-dom';


interface ProtectedRouteElementProps {
  element: React.ComponentType;
  isLoggedIn: boolean;
}

const ProtectedRouteElement:FC<ProtectedRouteElementProps> = ({ element: Component, isLoggedIn, ...props }) => {
  return isLoggedIn ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...props} />
  ) : (
    <Navigate to='/login' replace />
  );
}

export default ProtectedRouteElement;
