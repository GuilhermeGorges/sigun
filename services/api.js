const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

export const logar = async (mail, password) => {
    try {
        return await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: mail,
                password: password,
            }),
        });

    } catch (error) {
        console.error("Erro ao fazer login:", error.message);
        throw new Error("Erro ao autenticar usuário");
    }
}


export const fetchUserFunctions = async (profileType) => {
    try {
        const response = await fetch(`${BASE_URL}/user/functions/${profileType}`);

        if (!response.ok) {
            throw new Error(`Erro na requisição para obter funções do usuário: ${response.statusText}`);
        }

        const data = await response.json();
        return data.functions.map((func) => ({
            functionName: func.functionName,
            icon: func.icon,
          }));
    } catch (error) {
        console.error('Erro ao obter funções do usuário:', error.message);
        throw error;
    }
}
