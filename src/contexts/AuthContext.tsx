import { createContext } from "react";

type AuthContextType = {    
    token: string | null;
    isLoanding: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return <AuthContext.Provider value={value}></AuthContext.Provider>

}

export {  AuthProvider };