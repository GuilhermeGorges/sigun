import { createContext, useState } from 'react';

export const AuthContext = createContext({})

export function AuthProvider({children}) {
    const [user, setUser] = useState({})
    
    function logar(mail, password) {
        if(mail === "guilherme@mail.com" && password === "sysout") {
            setUser({
                name: "Guilherme Gorges",
                mail: "guilherme@mail.com"
            })
            return "sucess"
        }
        return "Credênciais inválidas."
    }

    return (
        <AuthContext.Provider value={{logar}}>
            {children}
        </AuthContext.Provider>
    )
}