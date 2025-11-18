import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from '../ui/TextField';

const RenderLogin = () => {
    const router = useRouter();
    const {height, width} = Dimensions.get("window");
    return(
        <AuthContainer 
            title="Bem-vindo de volta!"
            subtitle="Faça login para continuar!"
            icon="hotel">

        <TextField
            label="E-mail"
            icon="email"
            placeholder="user@gmail.com"
            keyboardType="email-address"
            />
        <PasswordField
            label="Senha"
            icon="lock"
            placeholder="******"
            />
        
        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={{alignItems: "center", marginTop: height * 0.03}}>
            <TouchableOpacity onPress={() => router.push("/(auth)/resetPassword")}>
                <Text style={{color: "#1f1e1eff", fontSize: 17, fontWeight: 600}}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <View style={{backgroundColor: "#7c8390ff", width: width * 0.5, height: height * 0.001,
                borderRadius: 10, marginTop: height * 0.03}}></View>
            <TouchableOpacity onPress={() => router.push("/(auth)/register")}style={{ marginTop: height * 0.03}}>
                <Text style={{color: "#1f1e1eff", fontWeight: 600, fontSize: 17}}>Não possui uma conta?
                    Cadastre-se 
                </Text>
            </TouchableOpacity>
        </View>


        </AuthContainer>


    );
}

export default RenderLogin;