import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/Auth/useAuth";

interface AdminRouteProps {
  allowedEmails: string[];
}

const AdminRoute: React.FC<AdminRouteProps> = ({ allowedEmails }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser || !allowedEmails.includes(currentUser.email!)) {
    return <Navigate to="/admin/login" />;
  }

  return <Outlet />;
};

export default AdminRoute;