import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const accessToken = localStorage.getItem('token');

  if (accessToken) {
    return <Component {...rest} />;
  } else {
    alert('Please log in to access this page.');
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
