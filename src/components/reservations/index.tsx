    import { useAuth } from "@/contexts/AuthContext";
    import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
    import React from "react";
    import {
    Alert,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    } from "react-native";
    import AuthContainer from "../ui/AuthContainer";
    import { global } from "../ui/styles";

    const RenderReservations = () => {
    const { width, height } = Dimensions.get("window");

    const { cartReservations, removeReservationFromCart, createOrder } =
        useAuth();

    const calculoTotal = cartReservations.reduce(
        (acc, item) => acc + Number(item.preco),
        0
    );

    const handleFinishOrder = async () => {
        try {
        await createOrder("Pix");
        Alert.alert("Sucesso", "Pedido finalizado!");
        } catch (error: any) {
        Alert.alert(
            "Erro",
            error.message || "Não foi possível finalizar o pedido."
        );
        }
    };

    return (
        <AuthContainer
        title="Minhas Reservas"
        subtitle="Revise os itens do seu carrinho"
        >
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40 }}
        >
            <View style={global.content}>
            <Text
                style={[
                global.label,
                { textAlign: "center", paddingVertical: height * 0.013 },
                ]}
            >
                Reservas adicionadas
            </Text>

            {cartReservations.length === 0 ? (
                <View
                style={{
                    padding: width * 0.04,
                    alignItems: "center",
                }}
                >
                <Text style={{ color: "#777", fontSize: 18 }}>
                    Nenhuma reserva adicionada
                </Text>
                </View>
            ) : (
                <View>
                {cartReservations.map((item, index) => (
                    <View key={index} style={styles.itemCard}>
                    {/* HEADER */}
                    <View
                        style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        }}
                    >
                        <View style={styles.cardHeader}>
                        <FontAwesome5 name="bed" size={18} color="#DC143C" />
                        <Text style={styles.roomLabel}>{item.nome}</Text>
                        </View>

                        <TouchableOpacity
                        onPress={() => removeReservationFromCart(index)}
                        >
                        <MaterialCommunityIcons
                            name="trash-can"
                            color="#DC143C"
                            size={20}
                        />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.divider} />

                    {/* INFO */}
                    <View style={styles.infoGrid}>
                        <View style={styles.infoBox}>
                        <Text style={styles.miniLabel}>ENTRADA</Text>
                        <Text style={styles.infoText}>{item.inicio}</Text>
                        </View>

                        <View style={styles.infoBox}>
                        <Text style={styles.miniLabel}>SAÍDA</Text>
                        <Text style={styles.infoText}>{item.fim}</Text>
                        </View>

                        <View style={styles.infoBox}>
                        <Text style={styles.miniLabel}>HÓSPEDES</Text>
                        <Text style={styles.infoText}>
                            {item.quantidade} Pessoas
                        </Text>
                        </View>
                    </View>

                    <View style={styles.totalDivider} />

                    {/* PREÇO */}
                    <View>
                        <Text style={styles.sectionTitle}>Resumo do valor</Text>

                        <View style={styles.priceRow}>
                        <View>
                            <Text style={styles.priceLabel}>
                            Preço da diária: R$ {item.preco}
                            </Text>
                            <Text style={styles.priceLabel}>
                            Quantidade de diárias: X
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.priceValue}>Subtotal</Text>
                            <Text style={styles.priceValue}>R$ X,xx</Text>
                        </View>
                        </View>
                    </View>
                    </View>
                ))}

                {/* TOTAL */}
                <View style={styles.itemCard}>
                    <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    >
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalPrice}>
                        R$ {calculoTotal.toFixed(2)}
                    </Text>
                    </View>
                </View>

                {/* BOTÃO */}
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={handleFinishOrder}
                    >
                    <Text style={styles.confirmButtonText}>
                        CONFIRMAR RESERVA
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
            )}
            </View>
        </ScrollView>
        </AuthContainer>
    );
    };

    const styles = StyleSheet.create({
    itemCard: {
        backgroundColor: "#1F1F1F",
        borderRadius: 16,
        padding: 18,
        borderWidth: 1,
        borderColor: "#2E2E2E",
        marginBottom: 18,
    },

    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    roomLabel: {
        fontSize: 17,
        fontWeight: "700",
        color: "#FFF",
    },

    divider: {
        height: 1,
        backgroundColor: "#333",
        marginVertical: 12,
        opacity: 0.8,
    },

    infoGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    infoBox: {
        gap: 2,
    },

    miniLabel: {
        fontSize: 10,
        color: "#888",
        fontWeight: "bold",
    },

    infoText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#CCC",
    },

    sectionTitle: {
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 12,
        color: "#FFF",
    },

    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    priceLabel: {
        color: "#AAA",
    },

    priceValue: {
        fontWeight: "600",
        color: "#FFF",
    },

    totalDivider: {
        height: 1,
        backgroundColor: "#333",
        marginVertical: 12,
    },

    totalLabel: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF",
    },

    totalPrice: {
        fontSize: 18,
        fontWeight: "700",
        color: "#07ff77",
    },

    buttonArea: {
        marginTop: 20,
    },

    confirmButton: {
        backgroundColor: "#DC143C",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },

    confirmButtonText: {
        color: "#FFF",
        fontWeight: "700",
        fontSize: 15,
    },
    });

    export default RenderReservations;