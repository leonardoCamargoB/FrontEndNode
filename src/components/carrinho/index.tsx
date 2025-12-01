import { Image, Text, View } from 'react-native';

const RenderCart = () => {
    return (
        <View style={{ padding: 20 }}>  
            {/* CARD BRANCO para Check-in */}
            <View style={{
                marginTop: 20,
                backgroundColor: "#ffffff",
                padding: 20,
                borderRadius: 12,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 6,
                elevation: 4,
                flexDirection: "row",       // << IMAGEM E TEXTO LADO A LADO
                alignItems: "center"
            }}>            
                {/* IMAGEM */}
                <Image
                    source={require("@/assets/imgs/porta fechada.png")}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 8,
                        marginRight: 15   // espaçamento entre imagem e texto
                    }}
                />
                {/* TEXTO */}
                <Text style={{
                    fontSize: 16,
                    fontWeight: "600"
                }}>
                    Check-in: 10/01/2025
                </Text>
            </View>    
            {/* CARD BRANCO para Check-out */}
            <View style={{
                marginTop: 20,
                backgroundColor: "#ffffff",
                padding: 20,
                borderRadius: 12,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 6,
                elevation: 4,
                flexDirection: "row",         // << imagem e texto lado a lado
                alignItems: "center"
            }}>           
                <Image
                    source={require("@/assets/imgs/porta aberta.png")}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 8,
                        marginRight: 15
                    }}
                />
                <Text style={{
                    fontSize: 16,
                    fontWeight: "600"
                }}>
                    Check-out: 12/01/2025
                </Text>
            </View>
        </View>
    );
};
export default RenderCart;
