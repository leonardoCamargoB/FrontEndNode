import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from '../ui/TextField';


function isValidEmail(email: string) {
    return /^[^\s@&='"!]@[^\s@&='"!].[^\s@&='"!]$/.test(email);
}



const RenderRegister = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confPassword, setConfPassword] = useState("");
        const [Nome, setNome] = useState("");
        const [CPF, setCPF] = useState("");
        const [Telefone, setTelefone] = useState("");
        const [loading, setLoading] = useState(false);
        const [touched, setTouched] = useState
        <{email: boolean; password: boolean; name: boolean; cpf: boolean; telefone: boolean; confPassword: boolean}>
        ({email: false, password: false, name: false, cpf: false, telefone: false, confPassword: false});

        const errors = useMemo(() =>{
                const errors: Record<string, string> = {};
                if(touched.email && !email) errors.email = "O e-mail é obrigatório.";
                if(touched.email && email && !isValidEmail(email)) errors.email = "O e-mail é inválido, Digite um e-mail válido.";
                if(touched.password && !password) errors.password = "A senha é obrigatória.";
                if(touched.password && password && password.length < 6) errors.password = "A senha deve ter no mínimo 6 caracteres.";
                if(touched.name && !Nome) errors.name = "O nome é obrigatório.";
                if(touched.cpf && !CPF) errors.cpf = "O CPF é obrigatório.";
                if(touched.telefone && !Telefone) errors.telefone = "O telefone é obrigatório.";
                if(touched.confPassword && !confPassword) errors.confPassword = "A confirmação de senha é obrigatória.";
                if(touched.confPassword && confPassword && confPassword !== password) errors.confPassword = "As senhas não coincidem.";
                return errors;
            }, [email, touched]);

            const canSubmit = email && Object.keys(errors).length === 0 && !loading;

    const handleSubmit =  async () => {   
    router.replace("/(auth)");
    }
        
    const router = useRouter();
    const {height, width} = Dimensions.get("window");
    return(
        <AuthContainer 
            title="Bem-vindo!"
            subtitle="Faça Cadastro para continuar!"
            icon="hotel">

        <TextField
            label="Nome"
            icon={{ lib: "FontAwesome6", name: "drive-file-rename-outline"}}
            placeholder="digite o seu nome"
            keyboardType="email-address"
            value={Nome}
            onChangeText={(text) => setNome(text)}
            />

        <TextField
            label="CPF"
            icon={{ lib: "FontAwesome6", name: "123"}}
            placeholder="xxx.xxx.xxx-xx"
            keyboardType="email-address"
            value={CPF}
            onChangeText={(text) => setCPF(text)}
            />

        <TextField
            label="Telefone"
            icon={{ lib: "FontAwesome6", name: "local-phone"}}
            placeholder="(xx) xxxxx-xxxx"
            keyboardType="email-address"
            value={Telefone}
            onChangeText={(text) => setTelefone(text)}
            />

            
        <TextField
            label="E-mail"
            icon={{ lib: "FontAwesome6", name: "email"}}
            placeholder="user@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
        <PasswordField
            label="Senha"
            icon={{ lib: "FontAwesome6", name: "lock"}}
            placeholder="******"
            value={password}
            onChangeText={(text) => setPassword(text)}
            />

        <PasswordField
            label="Confirme sua senha"
            icon={{ lib: "FontAwesome6", name: "lock"}}
            placeholder="******"
            value={confPassword}
            onChangeText={(text) => setConfPassword(text)}
            />
        
    <TouchableOpacity style={[global.primaryButton]} onPress={handleSubmit} disabled={!canSubmit}>
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

export default RenderRegister;