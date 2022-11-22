import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ProtectRoute({ children }) {
  const token = useSelector((store) => store.user.token);
  const isLogin = token;

  if (!isLogin) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children || <Outlet />;
}
