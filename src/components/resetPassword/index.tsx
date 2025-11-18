import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import TextField from '../ui/TextField';


const RenderLogin = () => {
    const router = useRouter();
    const {height, width} = Dimensions.get("window");
    return(
        
        <AuthContainer        
            title="Redefinição de Senha!"
            subtitle="Digite o seu e-mail para receber redefinir senha!"
            icon="hotel"
            setaEsquerda={
                <TouchableOpacity onPress={() => router.back()}><MaterialIcons name="arrow-back-ios" size={24} color="black"/>
                </TouchableOpacity>
            }
            >

        <TextField
            label="E-mail"
            icon="email"
            placeholder="user@gmail.com"
            keyboardType="email-address"
            />

        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Enviar o E-mail</Text>
        </TouchableOpacity>

        </AuthContainer>

        


    );
}

export default RenderLogin;