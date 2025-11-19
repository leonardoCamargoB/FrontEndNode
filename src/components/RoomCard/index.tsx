import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RoomCard = () => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.95}>
      {/* Badge Popular */}

      {/* Imagem do Quarto */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./img.jpg')}
          style={styles.image}
        />
        <View style={styles.overlay} />
      </View>

      {/* Informações do Quarto */}
      <View style={styles.infoSection}>
        {/* Header com título e preço */}
        <View style={styles.header}>
          <Text style={styles.title}>Quarto Elegante</Text>
          <Text style={styles.price}>R$ 259,99</Text>
        </View>

        {/* Características */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🛏️</Text>
            <Text style={styles.featureText}>Cama Casal</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🛏️</Text>
            <Text style={styles.featureText}>Cama Solteiro</Text>
          </View>
        </View>

        {/* Footer com localização e botão */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 50,
    width: "70%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 110, 
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
  popularBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  popularText: {
    color: "#1f2937",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  infoSection: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  title: {
    fontSize: 16, 
    fontWeight: "800",
    color: "#111827",
    flex: 1,
    marginRight: 10,
    lineHeight: 20, 
    letterSpacing: -0.3,
  },
  price: {
    fontSize: 18, 
    color: "#059669",
    fontWeight: "900",
    textAlign: "right",
    letterSpacing: -0.3,
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8, 
    marginBottom: 12, 
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 12, 
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  featureIcon: {
    fontSize: 12,
    marginRight: 4, 
  },
  featureText: {
    fontSize: 12, 
    color: "#475569",
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12, 
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  actionButton: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 16, 
    borderRadius: 12, 
    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  actionText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});

export default RoomCard;