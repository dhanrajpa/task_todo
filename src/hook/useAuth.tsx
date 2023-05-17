import { useContext } from "react";
import AuthContext from "../ContextApi/AuthProvide";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth 