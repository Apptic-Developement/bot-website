import React, { createContext, useState } from "react";


interface AuthContextData {
    accessToken: string | null;
    setAccessToken: (newToken: string) => void;
}


type AuthProps = {
    children: any
}

export const AuthContext = createContext<AuthContextData>({
    accessToken: null,
    setAccessToken: () => { }
});



const AuthProvider = ({ children }: AuthProps) => {
    const [accessToken, setAccessToken] = useState<string>(
        localStorage.getItem('accessToken') || ''
    );

    const handleSetAccessToken = (newToken: string) => {
        setAccessToken(newToken);
        localStorage.setItem('accessToken', newToken);
    };




    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken: handleSetAccessToken }}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;