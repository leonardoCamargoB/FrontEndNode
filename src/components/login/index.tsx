import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from '../ui/TextField';
import { Text, TouchableOpacity } from "react-native";
import { global } from "../ui/styles";

const RenderLogin = () => {
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

        </AuthContainer>


    );
}

export default RenderLogin;