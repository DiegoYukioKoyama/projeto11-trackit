import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({children}){

    const [token, setToken] = useState("")
    const [profileImage, setProfileImage] = useState("")

    return (
        <AuthContext.Provider value={{token, setToken, profileImage, setProfileImage}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider 