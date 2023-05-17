import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hook/useAuth"

const RequiredAuth = ({ allowedParam }: any) => {

    const { isAuth } = useAuth();
    const location = useLocation();
    console.log({ isAuth: isAuth });

    return (
        allowedParam
            ? <Outlet />
            : < Navigate to="/Login" state={{ from: location }} replace />
    );
}

export default RequiredAuth
