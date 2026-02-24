import { createContext, use, useEffect, useMemo } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@/constants/api";

type AuthContextType = {    
    token: string | null;
    isLoanding: boolean;
    signIn: (email: string, senha: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isLoanding, setIsLoanding] = useState(true); 

    // Carregar o token ao abrir o app

    useEffect(() => {
        (async ()=>{
            try {
                // Simulando carregamento do token
                const stored = await AsyncStorage.getItem("token");
                if(stored) setToken(stored);
            } finally{
                setIsLoanding(false);   
            }
        })();
    }, []);

    async function signIn(email: string, senha: string) {
        // Simulando uma requisição de login
        const res = await fetch(`${API_URL}/login` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
            body: JSON.stringify({ email, senha }),
        });
        // Back-End retorna erro {erro: "...."} quando falha
        if (!res.ok) {
            const err = await res.json().catch(() => null);
            throw new Error(err?.message || "Credenciais inválidas");
        }
        // Back-End retorna o JSON
        const tokeAPI: string = await res.json();

        await AsyncStorage.setItem("token", tokeAPI);
        setToken(tokeAPI);
    }
    // SingOut 
    async function signOut() {
        await AsyncStorage.removeItem("token");
        setToken(null);
    }
        const value = useMemo(() => ({
            token,
            isLoanding,
            signIn,
            signOut,
        }), [token, isLoanding]);
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export {  AuthProvider }; 