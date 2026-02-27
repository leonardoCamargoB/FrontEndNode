import { API_URL } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type RegisterData = {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
};

type AuthContextType = {
  token: string | null;
  isLoanding: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signUp: (data: RegisterData) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoanding, setIsLoanding] = useState(true);

  // 🔹 Carrega token ao abrir o app
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("token");
        if (stored) setToken(stored);
      } finally {
        setIsLoanding(false);
      }
    })();
  }, []);

  // 🔹 LOGIN
  async function signIn(email: string, senha: string) {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error(err?.message || "Credenciais inválidas");
    }

    const tokenAPI: string = await res.json();

    await AsyncStorage.setItem("token", tokenAPI);
    setToken(tokenAPI);
  }

  // 🔹 REGISTER
  async function signUp(data: RegisterData) {
    const res = await fetch(`${API_URL}/login/cadastro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error(err?.message || "Erro ao cadastrar");
    }

    // 🔥 Se backend já retorna token no cadastro
    const tokenAPI: string | null = await res.json().catch(() => null);

    if (tokenAPI) {
      await AsyncStorage.setItem("token", tokenAPI);
      setToken(tokenAPI);
    }
  }

  // 🔹 LOGOUT
  async function signOut() {
    await AsyncStorage.removeItem("token");
    setToken(null);
  }

  const value = useMemo(
    () => ({
      token,
      isLoanding,
      signIn,
      signUp,
      signOut,
    }),
    [token, isLoanding],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return ctx;
};

export default AuthProvider;