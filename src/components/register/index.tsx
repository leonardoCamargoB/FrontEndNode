    import { useRouter } from "expo-router";
    import { useState } from "react";
    import { Alert, Dimensions, Text, TouchableOpacity, View } from "react-native";
    import AuthContainer from "../ui/AuthContainer";
    import PasswordField from "../ui/PasswordField";
    import { global } from "../ui/styles";
    import TextField from "../ui/TextField";
    import MaterialIcons from "@expo/vector-icons/MaterialIcons";
    import { useAuth } from "@/contexts/AuthContext";

    function onlyNumbers(text: string) {
    return text.replace(/\D/g, "");
    }

    const RenderRegister = () => {
    const router = useRouter();
    const { signUp } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [loading, setLoading] = useState(false);

    // ✅ canSubmit simplificado (agora funciona corretamente)
    const canSubmit =
        email.trim().length > 0 &&
        password.length >= 6 &&
        nome.trim().length > 0 &&
        cpf.trim().length > 0 &&
        telefone.trim().length > 0 &&
        confPassword === password &&
        !loading;

    const handleSubmitRegister = async () => {
        if (!canSubmit) {
        Alert.alert("Atenção", "Preencha todos os campos corretamente.");
        return;
        }

        try {
        setLoading(true);

        const cpfLimpo = onlyNumbers(cpf);
        const telefoneLimpo = onlyNumbers(telefone);

        await signUp({
            nome: nome.trim(),
            email: email.trim(),
            senha: password,
            cpf: cpfLimpo,
            telefone: telefoneLimpo,
        });

        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        router.replace("/(tabs)/explorer");

        } catch (error: any) {
        Alert.alert("Erro", error.message || "Falha ao cadastrar.");
        } finally {
        setLoading(false);
        }
    };

    const { height, width } = Dimensions.get("window");

    return (
        <AuthContainer
        title="Bem-vindo!"
        subtitle="Faça Cadastro para continuar!"
        setaEsquerda={
            <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            </TouchableOpacity>
        }
        >
        <TextField
            label="Nome"
            icon={{ lib: "MaterialIcons", name: "people" }}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
        />

        <TextField
            label="CPF"
            icon={{ lib: "MaterialIcons", name: "format-list-numbered" }}
            placeholder="xxx.xxx.xxx-xx"
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
        />

        <TextField
            label="Telefone"
            icon={{ lib: "MaterialIcons", name: "phone" }}
            placeholder="(xx) xxxxx-xxxx"
            keyboardType="numeric"
            value={telefone}
            onChangeText={setTelefone}
        />

        <TextField
            label="E-mail"
            icon={{ lib: "MaterialIcons", name: "alternate-email" }}
            placeholder="user@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />

        <PasswordField
            label="Senha"
            icon={{ lib: "FontAwesome6", name: "lock" }}
            placeholder="******"
            value={password}
            onChangeText={setPassword}
        />

        <PasswordField
            label="Confirme sua senha"
            icon={{ lib: "FontAwesome6", name: "lock" }}
            placeholder="******"
            value={confPassword}
            onChangeText={setConfPassword}
        />

        <TouchableOpacity
            style={[global.primaryButton, loading && { opacity: 0.7 }]}
            onPress={handleSubmitRegister}
            disabled={!canSubmit}
        >
            <Text style={global.primaryButtonText}>
            {loading ? "Cadastrando..." : "Cadastre-se"}
            </Text>
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginTop: height * 0.03 }}>
            <View
            style={{
                backgroundColor: "#7c8390ff",
                width: width * 0.5,
                height: height * 0.001,
                borderRadius: 10,
                marginTop: height * 0.03,
            }}
            />
            <TouchableOpacity
            onPress={() => router.back()}
            style={{ marginTop: height * 0.03 }}
            >
            <Text style={{ color: "#1f1e1eff", fontWeight: "600", fontSize: 17 }}>
                Já possui uma conta? Faça o login
            </Text>
            </TouchableOpacity>
        </View>
        </AuthContainer>
    );
    };

    export default RenderRegister;