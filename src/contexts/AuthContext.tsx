import reservations from "@/app/(tabs)/reservations";
import { API_URL } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type RegisterData = {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
};

type CartReservations = {
  roomId: number;
  nome: string;
  qtd_cama_casal: number;
  qtd_cama_solteiro: number;
  preco: number;
  fim: string;
  inicio: string;
  quantidade: number;
  
}

type AuthContextType = {
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, senha: string) => Promise<void>;
  signUp: (data: RegisterData) => Promise<void>;
  signOut: () => Promise<void>;
  consulta: (inicio: string, fim: string, quantidade: number) => Promise<any[]>;
  cartReservations: CartReservations[];
  addReservationToCart: (reservation: CartReservations) => void;
  clearCart: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cartResrvations, setCartReservations] = useState<CartReservations[]>([])

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("token");
        if (stored) setToken(stored);
      } finally {
        setIsLoading(false);
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

    const tokenAPI: string | null = await res.json().catch(() => null);

    if (tokenAPI) {
      await AsyncStorage.setItem("token", tokenAPI);
      setToken(tokenAPI);
    }
  }

  // 🔹 CONSULTA
  async function consulta(inicio: string, fim: string, quantidade: number) {
    const res = await fetch(`${API_URL}/quartosDisponiveis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inicio, fim, quantidade }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => null);
      throw new Error(err?.message || "Sem quartos disponiveis");
    }
    return await res.json()
    const json = await res.json();
    console.log(json);
  }
  // 🔹 LOGOUT
  async function signOut() {
    await AsyncStorage.removeItem("token");
    setToken(null);
  }

  const addReservationToCart = (reservation: CartReservations) => {}

  const clearCart = () => {};

  const value = useMemo(
    () => ({
      token,
      isLoading,
      signIn,
      signUp,
      signOut,
      consulta,
      cartResrvations,
      addReservationToCart,
      clearCart,
      
    }),
    [token, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return ctx;
};

export default AuthProvider;
