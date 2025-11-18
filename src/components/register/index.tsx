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
            title="Bem-vindo!"
            subtitle="Faça Cadastro para continuar!"
            icon="hotel">

        <TextField
            label="Nome"
            icon="drive-file-rename-outline"
            placeholder="digite o seu nome"
            keyboardType="email-address"
            />

        <TextField
            label="CPF"
            icon="123"
            placeholder="xxx.xxx.xxx-xx"
            keyboardType="email-address"
            />

        <TextField
            label="Telefone"
            icon="local-phone"
            placeholder="(xx) xxxxx-xxxx"
            keyboardType="email-address"
            />

            
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

        <PasswordField
            label="Confirme sua senha"
            icon="lock"
            placeholder="******"
            />
        
        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Cadastre-se</Text>
        </TouchableOpacity>

        
                <View style={{alignItems: "center", marginTop: height * 0.03}}>
                    <View style={{backgroundColor: "#7c8390ff", width: width * 0.5, height: height * 0.001,
                        borderRadius: 10, marginTop: height * 0.03}}></View>
                    <TouchableOpacity onPress={() => router.back()}style={{ marginTop: height * 0.03}}>
                        <Text style={{color: "#1f1e1eff", fontWeight: 600, fontSize: 17}}>Já possui uma conta? Faça o login
                        </Text>
                    </TouchableOpacity>
                </View>

        </AuthContainer>


    );
}

export default RenderLogin;