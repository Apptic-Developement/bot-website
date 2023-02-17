import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import config from '../../config.json';
import axios from 'axios';
import getLoginUrl from "../../helpers/getLoginUrl";
interface User {
    username: string;
    id: string;
    avatar: string;
    discriminator: string;
}

interface AuthContextData {
    accessToken: string | null;
    user: User | null
    setAccessToken: (newToken: string) => void;
}


type AuthProps = {
    children: any
}

export const AuthContext = createContext<AuthContextData>({
    accessToken: null,
    user: null,
    setAccessToken: () => { }
});


type ProtectedRouteProps = {
    children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { accessToken, user } = useContext(AuthContext);
    if (!accessToken || !user) {
        return (
            <>
                {window.location.assign(getLoginUrl())}
            </>
        )
    }
    return (
        <>
            {children}
        </>
    )
}
const AuthProvider = ({ children }: AuthProps) => {
    const [accessToken, setAccessToken] = useState<string | null>(
        localStorage.getItem('accessToken') || null
    );
    const [userData, setUserData] = useState<User | null>(null);


    const handleSetAccessToken = (newToken: string) => {
        setAccessToken(newToken);
        localStorage.setItem('accessToken', newToken);
    };

    useEffect(() => {

        const getUser = async () => {
            if (accessToken) {
                const req = await fetch(config.API_URL + `/me`, { headers: { "token": accessToken } });
                if (req.status === 200) {
                    const res = await req.json()
                    setUserData({
                        username: res.username,
                        id: res.id,
                        avatar: res.avatar_url,
                        discriminator: res.discriminator
                    })
                } else {
                    setAccessToken(null);
                    setUserData(null);
                }
            } else {
                setAccessToken(null);
                setUserData(null);
            }
        }

        getUser()

    }, [])
    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken: handleSetAccessToken, user: userData }}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;