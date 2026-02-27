/*Função: Definir o fluxo de navegação entre as telas de autenticação LoginRegister ResetPassword
Sobreposição de telas: Stack Navigator, 3 funções para manipular o empilhamento:
push(): empilha uma tela acima da outra 
back(): remave a tela atual e retorna à tela anterior empilhada
replace(): substitui uma tela a tela atual por outra

*/

import { useAuth } from "@/contexts/AuthContext";

import { Redirect, Stack } from "expo-router";

const AuthLayout =() =>{ 
    

    const { token, isLoanding } = useAuth();
    // adicionar um componente de carregamento aqui, depois
    if (isLoanding) return null; // Ou um componente de carregamento
    
    if (token) {
        // Se o usuário já estiver autenticado, redireciona para a tela principal
        return <Redirect href="/(tabs)/explorer" />;
        
    }
    

    return(
    <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{title:"Login" }}/>
    </Stack>
    );
}
export default AuthLayout; 