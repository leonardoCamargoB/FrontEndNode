    import { FontAwesome6 } from "@expo/vector-icons";
    import { useState } from "react";
    import {Dimensions,Text,TouchableOpacity,View} from "react-native";
    import AuthContainer from "../ui/AuthContainer";
    import QuartoModal from "../ui/modals/QuartoModal";
    import { useRouter } from "expo-router";
    const { width } = Dimensions.get("window");
    import { FontAwesome5 } from "@expo/vector-icons";

    const RenderReservations = () => {
    const { width } = Dimensions.get("window");

    const [roomModalVisible, setRoomModalVisible] = useState(false);

    const reservation = {
        checkIn: "10/02/2026",
        checkOut: "15/02/2026",
        price: "R$ 1.250,00",
    };
    const router = useRouter();
    return (
        <AuthContainer
        title="Minhas Reservas"
        subtitle="Confira e finalize sua reserva"
        icon={{ lib: "FontAwesome6", name: "calendar" }}
        >
        {/* CARD DA RESERVA */}
        <View
            style={{
            backgroundColor: "#1F1F1F",
            borderRadius: 16,
            padding: 18,
            width: width * 0.94,
            gap: 16,
            borderWidth: 1,
            borderColor: "#2E2E2E",
            }}
        >          
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <FontAwesome5 name="bed" size={18} color="#DC143C" />
            <Text style={{ color: "#555555", fontSize: 17, fontWeight: "700" }}>Reserva Ativa</Text>
            </View>

            {/* DATAS */}
            <View style={{ gap: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <FontAwesome6 name="right-to-bracket" size={16} color="#4CAF50" />
                <Text style={{ color: "#555555" }}>
                Check-in:{" "}
                <Text style={{ color: "#555555" }}>{reservation.checkIn}</Text>
                </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <FontAwesome6 name="right-from-bracket" size={16} color="#F44336" />
                <Text style={{ color: "#555555" }}>
                Check-out:{" "}
                <Text style={{ color: "#555555" }}>{reservation.checkOut}</Text>
                </Text>
            </View>
            </View>

            {/* DIVISOR */}
            <View style={{height: 1,backgroundColor: "#333",opacity: 0.8,}}/>

            {/* PREÇO */}
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <FontAwesome6 name="money-bill-wave" size={18} color="#07ff77" />
            <Text style={{ color: "#CCC", fontSize: 15 }}>
                Valor total
            </Text>
            <Text
                style={{
                color: "#FFF",
                fontSize: 16,
                fontWeight: "700",
                marginLeft: "auto",
                }}
            >
                {reservation.price}
            </Text>
            </View>

            {/* BOTÃO DETALHES */}
            <TouchableOpacity
            style={{
                marginTop: 8,
                backgroundColor: "#DC143C",
                paddingVertical: 12,
                borderRadius: 10,
                alignItems: "center",
            }}
            onPress={() => setRoomModalVisible(true)}
            >
            <Text style={{ color: "#FFF", fontWeight: "600" }}>
                Ver detalhes do Reserva
            </Text>
            </TouchableOpacity>

            {/* BOTÕES PRINCIPAIS */}
            <View style={{ gap: 10, marginTop: 6 }}>
            {/* CONFIRMAR */}
            <TouchableOpacity
                style={{
                backgroundColor: "#DC143C",
                paddingVertical: 14,
                borderRadius: 12,
                alignItems: "center",
                }}
                onPress={() => {}}
            >
                <Text
                style={{
                    color: "#FFF",
                    fontSize: 15,
                    fontWeight: "700",
                }}
                >
                Confirmar reserva
                </Text>
            </TouchableOpacity>

            {/* VOLTAR */}
            <TouchableOpacity
                style={{
                borderWidth: 1,
                borderColor: "#DC143C",
                paddingVertical: 12,
                borderRadius: 12,
                alignItems: "center",
                }}
                onPress={() => router.push("/(tabs)/explorer")}
            >
                <Text
                style={{
                    color: "#DC143C",
                    fontSize: 14,
                    fontWeight: "600",
                }}
                >
                Editar reserva
                </Text>
            </TouchableOpacity>
            </View>
        </View>

        {/* MODAL */}
        <QuartoModal
            visible={roomModalVisible}
            onClose={() => setRoomModalVisible(false)}
            room={{
            title: "Apartamento",
            description:
                "quarto confortável, ideal para casais ou famílias pequenas.",
            estadia:
                "Estadia mínima de 2 noites\nCheck-in a partir das 14h\nCheck-out até as 12h",
            checkIn: "10/07/2026 - 14:00",
            checkOut: "17/07/2026 - 12:00",
            details: [
                "Wi-Fi gratuito",
                "Ar-condicionado",
                "Banheiro privativo",
                "sacada com vista para o mar",
                "TV de tela plana",
            ],
            beds: ["1 cama de casal", "3 cama de solteiro"],
            price: 259.99,
            image: require("../../assets/imgs/img.jpg"),
            }}
        />
        </AuthContainer>
    );
    };

    export default RenderReservations;
