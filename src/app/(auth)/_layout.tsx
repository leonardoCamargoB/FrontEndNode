/*Função: Definir o fluxo de navegação entre as telas de autenticação LoginRegister ResetPassword
Sobreposição de telas: Stack Navigator, 3 funções para manipular o empilhamento:
push(): empilha uma tela acima da outra 
back(): remave a tela atual e retorna à tela anterior empilhada
replace(): substitui uma tela a tela atual por outra

*/

import { Stack } from "expo-router";

const AuthLayout =() =>{
    return(

        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{title:"Login" }}/>
        </Stack>

    );

}

export default AuthLayout; 