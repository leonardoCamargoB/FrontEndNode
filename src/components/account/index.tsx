    import { useState } from "react";
    import {
        Alert,
        Modal,
        StyleSheet,
        Text,
        TouchableOpacity,
        View,
    } from "react-native";
    import { Masks } from "react-native-mask-input";
    import AuthContainer from "../ui/AuthContainer";
    import PasswordField from "../ui/PasswordField";
    import TextField from "../ui/TextField";
    import { global } from "../ui/styles";

    const ChangePasswordModal = ({
    visible,
    onClose,
    }: {
    visible: boolean;
    onClose: () => void;
    }) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetAndClose = () => {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        onClose();
    };

    const handleChangePassword = () => {
        if (!oldPassword || !newPassword || !confirmPassword) {
        Alert.alert("Erro", "Preencha todos os campos");
        return;
        }

        if (newPassword !== confirmPassword) {
        Alert.alert("Erro", "As senhas não coincidem");
        return;
        }


        Alert.alert("Sucesso", "Senha alterada com sucesso!");
        resetAndClose();
    };

    return (
        <Modal
        visible={visible}
        animationType="fade"
        transparent
        onRequestClose={resetAndClose}
        >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
            <PasswordField
                label="Senha antiga"
                value={oldPassword}
                onChangeText={setOldPassword}
            />

            <PasswordField
                label="Nova senha"
                value={newPassword}
                onChangeText={setNewPassword}
            />

            <PasswordField
                label="Confirmar nova senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <TouchableOpacity
                style={styles.primaryButton}
                onPress={handleChangePassword}
            >
                <Text style={styles.buttonText}>Confirmar alteração</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={resetAndClose}>
                <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
    };

    const RenderAccount: React.FC = () => {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <AuthContainer
        title="Minha Conta"
        subtitle="Gerencie suas informações e preferências"
        >
        <View style={global.container}>
            <TextField
            label="Nome de Usuário"
            icon={{ lib: "FontAwesome6", name: "user" }}
            value="Leonardo Camargo Benette"
            onchangeText={setName}
            editable={false}
            />

            <TextField
            label="CPF"
            icon={{ lib: "FontAwesome6", name: "id-card" }}
            value="123.456.789-00"
            onChangeText={setCpf}
            mask={Masks.BRL_CPF}
            onchangeText={(masked, unmasked) => setCpf(masked ?? "")}
            editable={false}
            />

            <TextField
            label="Email"
            icon={{ lib: "FontAwesome6", name: "envelope" }}
            value="leo@gmail.com"
            onchangeText={setEmail}
            editable={false}
            />

            <TextField
            label="Telefone"
            icon={{ lib: "FontAwesome6", name: "phone" }}
            value="(15) 99122-8196"
            onChangeText={setPhone}
            mask={Masks.BRL_PHONE}
            onchangeText={(masked, unmasked) => setPhone(masked ?? "")}
            editable={false}
            />

            <TouchableOpacity
            style={[styles.primaryButton, { marginBottom: 12, marginTop: 24 }]}
            >
            <Text style={styles.buttonText}>Alterar dados</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => setShowPasswordModal(true)}
            >
            <Text style={styles.buttonText}>Privacidade e Segurança</Text>
            </TouchableOpacity>
        </View>

        <ChangePasswordModal
            visible={showPasswordModal}
            onClose={() => setShowPasswordModal(false)}
        />
        </AuthContainer>
    );
    };

    export default RenderAccount;

    /*--/ESTILO MODAL\--*/
    const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: "#DC143C",
        padding: 14,
        borderRadius: 6,
        alignItems: "center",
    },
    secondaryButton: {
        backgroundColor: "#555",
        padding: 14,
        borderRadius: 6,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        padding: 20,
    },
    modalContent: {
        backgroundColor: "#414141",
        borderRadius: 8,
        padding: 20,
        gap: 16,
    },
    cancelText: {
        textAlign: "center",
        color: "#888",
        marginTop: 8,
    },
    });
