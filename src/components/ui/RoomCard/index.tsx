import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import cardRoomStyle from "./cardRoomStyle";
import { global } from "../styles";

const { width, height } = Dimensions.get('window');

type Infos = 
| {title?: string; text?: string; price: number }


type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Props = {
  image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  label?: string;
  description?: Infos;
  icon?: NameIcon;
}

const RoomCard =  ({label, description, icon}: Props) => {
  return (
      <View style={global.content}>  
        <View>
        </View>
        <View>
          {!!label && <Text style={global.titulo}>{label}</Text>}
          <View>
            <View>
              {!!icon && (
                <View>
                  {icon.lib === "MaterialIcons" && (
                    <MaterialIcons name={icon.name} size={23} color="black"/>
                  )}
                  {icon.lib === "FontAwesome6" && (
                    <FontAwesome6 name={icon.name} size={23} color="black"/>
                  )}
                  {icon.lib === "FontAwesome5" && (
                    <FontAwesome5 name={icon.name} size={23} color="black"/>
                  )}
                </View>
              )}
              {!!description && (
                <View style={{display: "flex",  flexDirection:"column"}}>
                  <View style={styles.descripton}>
                    <Text style={{color: "#475569"}}>{description.title}</Text>
                    <Text style={{color: "#475569"}}>{description.text}</Text>
                    <View>
                    <Text style={{color: "#475569"}}>{description.price}</Text>
                    </View>   
                  </View>
                </View>
              )}
              </View>
            <View></View>
            </View>
          </View>

      </View>
  );
};

const styles = StyleSheet.create({
  descripton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#475569",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2, 
  }
})

export default RoomCard;