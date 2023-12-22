// ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { checkAuthentication } from './auth';

function ProtectedRoute({ element, ...rest }) {
  // Check if the user is authenticated based on your cookies or authentication state
  const isAuthenticated = checkAuthentication(); // Implement this function

  if (isAuthenticated) {
    // User is authenticated, allow access to the route
    return <Route {...rest} element={element} />;
  } else {
    // User is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
