import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token && token === null) {
    return <Navigate to={"/login"} />;
  }
  // outlet itu component bawaan react router dom, component default
  return <>{children || <Outlet />}</>;
};
export default ProtectedRoute;
