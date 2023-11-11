import { createContext, useState } from 'react';

import { logar } from '../services/api';

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    async function login(mail, password) {
        const response = await logar(mail, password, setUser);

        const data = await response.json();

        if (response.ok) {
            setUser({
                name: data.name,
                mail: data.username,
            });

            return "success";
        } else {
            return "Credenciais inválidas.";
        }
    };

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    )
}