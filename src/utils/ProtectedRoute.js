import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ token, children }) {
  if (!token) {
    return <Navigate to="/auth/signin"/>
  }
  return children
}
export default ProtectedRoute;