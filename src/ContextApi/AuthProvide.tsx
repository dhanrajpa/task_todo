import { createContext, useEffect, useRef, useState } from "react";

export interface objType {
    id?: number,
    age?: number,
    name?: string,
    password?: string,
    email?: string,
}

type contextType = {
    isAuth: string,
    requiredAuthFlag: boolean,
    setAuth: React.Dispatch<React.SetStateAction<string>>,
    setAuthFlag: React.Dispatch<React.SetStateAction<boolean>>,
    authflag: boolean
}
const AuthContext = createContext({} as contextType);

type ContextProvideType = {
    children: React.ReactNode
}


export const AuthProvider = ({ children }: ContextProvideType) => {

    const [isAuth, setAuth] = useState("");
    const [requiredAuthFlag, setrequiredAuthFlag] = useState(false);
    const [authflag, setAuthFlag] = useState(false);
    const effectRan = useRef(false);

    const authUpdate = (): void => {
        const userData = sessionStorage.getItem("user")

        if (userData) {
            const authData = userData;
            setAuth(authData);
            setrequiredAuthFlag(true);
        } else {
            sessionStorage.setItem("authenticate", "notAuthenticated");
        }
    }

    console.log(isAuth);

    useEffect(() => {
        console.log("context rerendered");

        if (effectRan.current === false) {
            authUpdate();
        }

        return () => {
            effectRan.current = true
        }

    }, [isAuth])

    return (
        <AuthContext.Provider value={{ isAuth, requiredAuthFlag, setAuth, setAuthFlag, authflag }}>
            {children}
        </AuthContext.Provider>
    )

}


export default AuthContext;

