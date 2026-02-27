    import { useAuth } from "@/contexts/AuthContext";
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
    import { useRouter } from "expo-router";
    import { FontAwesome6 } from "@expo/vector-icons";

    import AuthContainer from "../ui/AuthContainer";
    import PasswordField from "../ui/PasswordField";
    import TextField from "../ui/TextField";
    import { global } from "../ui/styles";

    /* ================= MODAL ALTERAR SENHA ================= */

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
        statusBarTranslucent
        onRequestClose={resetAndClose}
        >
        <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Alterar Senha</Text>

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
                style={styles.modalPrimaryButton}
                onPress={handleChangePassword}
            >
                <Text style={styles.modalPrimaryText}>
                Confirmar alteração
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={resetAndClose}>
                <Text style={styles.modalCancelText}>Cancelar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
    );
    };

    /* ================= TELA MINHA CONTA ================= */

    const RenderAccount: React.FC = () => {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");

    const { signOut } = useAuth();
    const router = useRouter();

    const logout = async () => {
        await signOut();
        router.replace("/(auth)");
    };

    return (
        <AuthContainer
        title="Minha Conta"
        subtitle="Gerencie suas informações e preferências"
        >
        {/* HEADER */}
        <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>Minha Conta</Text>

            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <FontAwesome6
                name="right-from-bracket"
                size={16}
                color="#DC143C"
            />
            <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
        </View>

        <View style={global.container}>
            <TextField
            label="Nome de Usuário"
            icon={{ lib: "FontAwesome6", name: "user" }}
            value="Leonardo Camargo Benette"
            editable={false}
            />

            <TextField
            label="CPF"
            icon={{ lib: "FontAwesome6", name: "id-card" }}
            value="123.456.789-00"
            mask={Masks.BRL_CPF}
            onChangeText={(masked) => setCpf(masked ?? "")}
            editable={false}
            />

            <TextField
            label="Email"
            icon={{ lib: "FontAwesome6", name: "envelope" }}
            value="leo@gmail.com"
            editable={false}
            />

            <TextField
            label="Telefone"
            icon={{ lib: "FontAwesome6", name: "phone" }}
            value="(11) 91234-5678"
            mask={Masks.BRL_PHONE}
            onChangeText={(masked) => setPhone(masked ?? "")}
            editable={false}
            />

            <TouchableOpacity
            style={[styles.primaryButton, { marginTop: 24, marginBottom: 12 }]}
            >
            <Text style={styles.buttonText}>Alterar dados</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => setShowPasswordModal(true)}
            >
            <Text style={styles.buttonText}>
                Privacidade e Segurança
            </Text>
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

    /* ================= ESTILOS ================= */

    const styles = StyleSheet.create({
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
    },

    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },

    logoutText: {
        color: "#DC143C",
        fontWeight: "600",
    },

    primaryButton: {
        backgroundColor: "#DC143C",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
    },

    secondaryButton: {
        backgroundColor: "#555",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    modalCard: {
        width: "100%",
        backgroundColor: "#2C2C2C",
        borderRadius: 16,
        padding: 24,
        gap: 18,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        marginBottom: 8,
    },

    modalPrimaryButton: {
        backgroundColor: "#DC143C",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },

    modalPrimaryText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 15,
    },

    modalCancelText: {
        textAlign: "center",
        color: "#AAA",
        marginTop: 10,
        fontSize: 14,
    },
    });