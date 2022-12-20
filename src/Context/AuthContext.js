import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext()

function AuthProvider({ children }) {

    const [token, setToken] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [percent, setPercent] = useState(0)
    const [listaHabitos, setListaHabitos] = useState([])

    function porcentagem() {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then((resp) => {
                setListaHabitos(resp.data)
                const total = listaHabitos.length
                const done = listaHabitos.filter((l) => l.done).length
                const porcentagem = Number(((done / total) * 100).toFixed(0))
                setPercent(isNaN(percent) ? 0 : percent)
            })
            .catch((err) => alert(err.response.data.message))
    }
    return (
        <AuthContext.Provider value={{ token, setToken, profileImage, setProfileImage, percent, porcentagem }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider 
