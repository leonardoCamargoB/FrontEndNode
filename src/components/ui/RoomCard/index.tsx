import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
};


const { width, height } = Dimensions.get("window");

const RoomCard = ({ image, label, description, icon, onPress }: Props) => {
  return (
    <View style={global.content}>

      {!!image && (
        <View>
          <Image style={styles.image} source={image} resizeMode="cover" />
        </View>
      )}

      <View>
        {!!label && (
          <Text style={{ fontSize: 23, fontWeight: 600, marginTop: height * 0.02 }}>
            {label}
          </Text>
        )}

        <View style={styles.container}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
            
            {!!icon && (
              <View style={{ marginTop: height * 0.04 }}>
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

            {!!description && (
              <View style={styles.description}>
                <View>
                  {!!description.title && (
                    <Text style={global.label}>{description.title}</Text>
                  )}
                  <Text style={styles.text}>{description.text}</Text>
                </View>

                <View style={{ marginTop: height * 0.04 }}>
                  <Text style={styles.price}>R$ {description.price}</Text>
                </View>
              </View>
            )}

          </View>
        </View>

        {/* 🔽 BOTÃO PARA ABRIR MODAL */}
        {!!onPress && (
          <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
            <Text style={styles.detailsButtonText}>Ver detalhes</Text>
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height * 0.3,
    width: "auto",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  container: {
    marginTop: height * 0.03,
    backgroundColor: "#444444",
    borderRadius: 10,
  },

  description: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: height * 0.09,
    width: "auto",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 15,
  },

  price: {
    width: width * 0.7,
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 10,
    color: "black",
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
