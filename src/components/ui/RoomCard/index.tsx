import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { global } from "../styles";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Infos = { title?: string; text: string; price: number };

type Props = {
  image?: ImageSourcePropType;
  label?: string;
  description?: Infos;
  icon?: NameIcon;
  onPress?: () => void;
  onPressReserve?: () => void
};

const { width, height } = Dimensions.get("window");

const RoomCard = ({ image, label, description, icon, onPress, onPressReserve }: Props) => {
  return (
    <View style={global.content}>
      {/* IMAGEM */}
      {!!image && (
        <Image style={styles.image} source={image} resizeMode="cover" />
      )}

      {/* TITULO */}
      {!!label && (
        <Text style={styles.title}>
          {label}
        </Text>
      )}

      <View style={styles.container}>
        <View style={styles.row}>
          
          {/* ÍCONE */}
          {!!icon && (
            <View style={styles.icon}>
              {icon.lib === "MaterialIcons" && (
                <MaterialIcons name={icon.name} size={22} color="black" />
              )}
              {icon.lib === "FontAwesome5" && (
                <FontAwesome5 name={icon.name} size={22} color="black" />
              )}
              {icon.lib === "FontAwesome6" && (
                <FontAwesome6 name={icon.name} size={22} color="black" />
              )}
            </View>
          )}

          {/* DESCRIÇÃO */}
          {!!description && (
            <View style={styles.description}>
              <View>
                {!!description.title && (
                  <Text style={global.label}>{description.title}</Text>
                )}

                <Text style={styles.text}>{description.text}</Text>
              </View>

              <Text style={styles.price}>
                R$ {description.price.toFixed(2)}
              </Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.detailsButton} onPress={onPressReserve}>
          <Text style={styles.detailsButtonText}>
            Fazer Pedido
          </Text>
      </TouchableOpacity>

      {/* BOTÃO DETALHES */}
      {!!onPress && (
        <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
          <Text style={styles.detailsButtonText}>
            Ver detalhes
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height * 0.28,
    width: "100%",
    borderRadius: 10,
  },

  title: {
    fontSize: 23,
    fontWeight: "600",
    marginTop: height * 0.02,
  },

  container: {
    marginTop: height * 0.03,
    backgroundColor: "#3b3b3b",
    borderRadius: 10,
    padding: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 12,
  },

  description: {
    flex: 1,
    justifyContent: "space-between",
  },

  text: {
    fontSize: 15,
    marginTop: 2,
  },

  price: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },

  detailsButton: {
    marginTop: height * 0.025,
    backgroundColor: "#DC143C",
    height: height * 0.06,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});

export default RoomCard;