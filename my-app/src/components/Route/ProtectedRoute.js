import React from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    return <Route {...rest} element={<Component />} />;
  } else {
    // Redirect to login with the current path as state
    window.location.replace(`/login?from=${rest.path}`);
    // Returning null, as this component won't render anything
    return null;
  }
};

export default ProtectedRoute;
