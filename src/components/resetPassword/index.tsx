import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import TextField from '../ui/TextField';
import { useState, useMemo } from "react";

function isValidEmail(email: string) {
    return /^[^\s@&='"!]@[^\s@&='"!].[^\s@&='"!]$/.test(email);
}


const RenderResetPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{email?: boolean}>({});

    const errors = useMemo(() =>{
            const errors: Record<string, string> = {};
            if(touched.email && !email) errors.email = "O e-mail é obrigatório.";
            if(touched.email && email && !isValidEmail(email)) errors.email = "O e-mail é inválido, Digite um e-mail válido.";
            
            
            
            return errors;
        }, [email, touched]);

        const canSubmit = email &&  Object.keys(errors).length === 0 && !loading;

        const handleSubmit =  async () => {
            router.replace("/(auth)");
        }





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
            icon={{ lib: "FontAwesome6", name: "email" }}
            placeholder="user@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            errorText={errors.email}
            />

        <TouchableOpacity style={[global.primaryButton]} onPress={handleSubmit} disabled={!canSubmit}>
            <Text style={global.primaryButtonText}>Eviar o E-mail</Text>
        </TouchableOpacity>

        </AuthContainer>

        


    );
}

export default RenderResetPassword;