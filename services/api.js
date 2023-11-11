const BASE_URL = 'http://localhost:8080';

export const logar = async(mail, password) => {
    try {
        return await fetch('http://localhost:8080/user/login', {
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
