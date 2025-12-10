import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from '../ui/TextField';
import { useMemo, useState } from "react";   

function isValidEmail(email: string) {
    return /^[^\s@&='"!]@[^\s@&='"!].[^\s@&='"!]$/.test(email);
}


const RenderLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched,  ] = useState<{email?: boolean; password?: boolean}>({});

    const errors = useMemo(() =>{
        const errors: Record<string, string> = {};
        if(touched.email && !email) errors.email = "O e-mail é obrigatório.";
        if(touched.password && !password) errors.password = "A senha é obrigatória.";
        if(touched.password && password.length < 6)  errors.password = "A senha deve ter no mínimo 6 caracteres.";
        if(touched.email && email && !isValidEmail(email)) errors.email = "O e-mail é inválido, Digite um e-mail válido.";
        
        
        
        return errors;
    }, [email, password, touched]);
    
    const canSubmit = email && password && Object.keys(errors).length === 0 && !loading;

    const handleSubmit =  async () => {
    router.replace("/(tabs)/explorer");
    }

    const router = useRouter();
    const {height, width} = Dimensions.get("window");
    return( 
        <AuthContainer 
            title="Bem-vindo de volta!"
            subtitle="Faça login para continuar!"
            >
        <View style={global.content}>
        <TextField
            label="E-mail"
            icon={{ lib: "FontAwesome6", name: "email"}}
            value={email}
            onChangeText={(text) => setEmail(text)}
            errorText={errors.email}
            placeholder="user@gmail.com"
            keyboardType="email-address"
            />
        <PasswordField
            label="Senha"
            icon={{ lib: "FontAwesome6", name: "lock"}}
            placeholder="******"
            value={password}
            onChangeText={(text) => setPassword(text)}
            errorText={errors.password}
            />
        
        <TouchableOpacity style={[global.primaryButton]} onPress={handleSubmit} disabled={!canSubmit}>
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
</View>


        </AuthContainer>


    );
}

export default RenderLogin;