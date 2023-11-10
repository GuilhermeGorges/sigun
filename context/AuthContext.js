import { createContext, useState } from 'react';

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})

    async function logar(mail, password) {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: mail,
                    password: password,
                }),
            });

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
        } catch (error) {
            console.error("Erro ao fazer login:", error.message);
            throw new Error("Erro ao autenticar usuário");
        }
    }

    return (
        <AuthContext.Provider value={{ user, logar }}>
            {children}
        </AuthContext.Provider>
    )
}