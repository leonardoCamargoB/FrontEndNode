import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import cardRoomStyle from "./cardRoomStyle";

const { width, height } = Dimensions.get('window');

const RoomCard = () => {
  return (
    <TouchableOpacity style={cardRoomStyle.card} activeOpacity={0.95}>
      {/* Badge Popular */}

      {/* Imagem do Quarto */}
      <View style={cardRoomStyle.imageContainer}>
        <Image
          source={require('./img.jpg')}
          style={cardRoomStyle.image}
        />
        <View style={cardRoomStyle.overlay} />
      </View>

      {/* Informações do Quarto */}
      <View style={cardRoomStyle.infoSection}>
        {/* Header com título e preço */}
        <View style={cardRoomStyle.header}>
          <Text style={cardRoomStyle.title}>Quarto Elegante</Text>
          <Text style={cardRoomStyle.price}>R$ 259,99</Text>
        </View>

        {/* Características */}
        <View style={cardRoomStyle.features}>
          <View style={cardRoomStyle.featureItem}>
            <Text style={cardRoomStyle.featureIcon}>🛏️</Text>
            <Text style={cardRoomStyle.featureText}>Cama Casal</Text>
          </View>
          <View style={cardRoomStyle.featureItem}>
            <Text style={cardRoomStyle.featureIcon}>🛏️</Text>
            <Text style={cardRoomStyle.featureText}>Cama Solteiro</Text>
          </View>
        </View>

        {/* Footer com localização e botão */}
        <View style={cardRoomStyle.footer}>
          <TouchableOpacity style={cardRoomStyle.actionButton}>
            <Text style={cardRoomStyle.actionText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoomCard;