    import { useRouter } from "expo-router";
    import {Dimensions,Image,Modal,ScrollView,StyleSheet,Text,TouchableOpacity,View,} from "react-native";
    const { width, height } = Dimensions.get("window");
    
    type RoomDetailsModalProps = {
    visible: boolean;
    onClose: () => void;
    room: {
        title: string;
        description: string;
        beds: string[];
        price: number;
        image: any;
        details?: string[];
        estadia?: string;
        checkIn?: string;
        checkOut?: string;
    };
    };

    const RoomDetailsModal = ({
    visible,
    onClose,
    room,
    }: RoomDetailsModalProps) => {
    const router = useRouter();
    return (
        <Modal
        visible={visible}
        animationType="fade"
        transparent
        onRequestClose={onClose}
        >
        <View style={styles.overlay}>
            <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Imagem */}
                <Image source={room.image} style={styles.image} />

                {/* Título */}
                <Text style={styles.title}>{room.title}</Text>

                {/* Preço */}
                <Text style={styles.price}>R$ {room.price.toFixed(2)} / noite</Text>

                {/* Descrição */}
                <Text style={styles.description}>{room.description}</Text>

                {/*Check-in e Check-out*/}
                {room.checkIn && room.checkOut && (
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>Check-in: {room.checkIn}</Text>
                    <Text style={styles.infoText}>Check-out: {room.checkOut}</Text>
                </View>
                )}

                {/*Tempo estadia*/}
                {room.estadia && (room.estadia.length > 0) && (
                <View style={styles.infoBox}>
                    {room.estadia.split('\n').map((line, index) => (
                    <Text key={index} style={styles.infoText}>
                        • {line}
                    </Text>
                    ))}
                </View>
                )}

                {/* Detalhes dinâmicos */}
                {room.details && room.details.length > 0 && (
                <View style={styles.infoBox}>
                    {room.details.map((item, index) => (
                    <Text key={index} style={styles.infoText}>
                        • {item}
                    </Text>
                    ))}
                </View>
                )}

                {/* Camas */}
                {room.beds.length > 0 && (
                <View style={styles.bedsContainer}>
                    <Text style={styles.sectionTitle}>Camas</Text>
                    {room.beds.map((bed, index) => (
                    <Text key={index} style={styles.bedText}>
                        • {bed}
                    </Text>
                    ))}
                </View>
                )}

                {/* Botão */}
                <TouchableOpacity
                onPress={() => router.push("/(tabs)/reservations")}
                style={styles.primaryButton}
                >
                <Text style={styles.primaryButtonText}>Reservar agora</Text>
                </TouchableOpacity>

                {/* Fechar */}
                <TouchableOpacity onPress={onClose}>
                <Text style={styles.cancelText}>Fechar</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
        </View>
        </Modal>
    );
    };

    const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.65)",
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        width: "92%",
        maxHeight: "90%",
        backgroundColor: "#2D2D2D",
        borderRadius: 22,
        padding: width * 0.05,
        borderWidth: 1,
        borderColor: "#444444",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 14,
        elevation: 10,
    },

    image: {
        width: "100%",
        height: height * 0.24,
        borderRadius: 18,
        marginBottom: height * 0.02,
    },

    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#DC143C",
        letterSpacing: 1.2,
    },

    price: {
        fontSize: 20,
        fontWeight: "600",
        color: "#FFFFFF",
        marginVertical: height * 0.015,
    },

    description: {
        fontSize: 14,
        color: "#B8B8B8",
        lineHeight: 22,
        marginBottom: height * 0.02,
    },

    infoBox: {
        backgroundColor: "#3A3A3A",
        borderRadius: 14,
        padding: 12,
        marginBottom: height * 0.02,
    },

    infoText: {
        fontSize: 14,
        color: "#E0E0E0",
        marginBottom: 6,
    },

    bedsContainer: {
        marginBottom: height * 0.03,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#DC143C",
        marginBottom: 8,
    },

    bedText: {
        fontSize: 14,
        color: "#E8E8E8",
        marginBottom: 4,
    },

    primaryButton: {
        backgroundColor: "#DC143C",
        borderRadius: 18,
        height: height * 0.065,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#B22222",
        shadowOpacity: 0.45,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 7,
        borderWidth: 1,
        borderColor: "#B22222",
        marginBottom: height * 0.02,
    },

    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 1.4,
        textTransform: "uppercase",
    },

    cancelText: {
        color: "#B8B8B8",
        fontSize: 14,
        textAlign: "center",
        letterSpacing: 0.6,
    },
    });

    export default RoomDetailsModal;
