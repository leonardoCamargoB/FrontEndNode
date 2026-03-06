import AuthContainer from "@/components/ui/AuthContainer";
import RenderDatePicker from "@/components/ui/DatePicker";
import { useAuth } from "@/contexts/AuthContext";
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RoomCard from "../ui/RoomCard";
import TextField from "../ui/TextField";
import InputSpin from "../ui/inputSpin";
import QuartoModal from "../ui/modals/QuartoModal";
import { global } from "../ui/styles";

const RenderExplore = () => {
  const { width, height } = Dimensions.get("window");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [calendar, setCalendar] = useState<"checkin" | "checkout" | null>(null);
  const [qntGuests, setQntGuests] = useState<number>(1);
  const router = useRouter();
  const { consulta } = useAuth();
  const [conQuarto, setConQuarto] = useState(false);
  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [loaging, setLoanding] = useState(false);
  const [avaibleRooms, setAvailableRooms] = useState<any[]>([]);
  const [searchroom, addReservationToCart] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  const closeCalendar = () => setCalendar(null);

  type NameIcon =
    | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

  const handleSearch = async () => {
    if (!checkIn || !checkOut) {
      Alert.alert(
        "ATENÇÃO!",
        "Selecione as datas de entrada e saída para continuar",
      );
      return;
    }
    setLoanding(true);
    setAvailableRooms([]);

    try {
      const rooms = await consulta(checkIn, checkOut, qntGuests);
      setAvailableRooms(rooms || []);
      console.log(rooms);
    } catch (error: any) {
      if (!error?.message?.includes("encontrado")) {
        Alert.alert("ERRO", "Ocorreu um problema ao buscar quartos.");
      }
      setAvailableRooms([]);
    } finally {
      setLoanding(false);
    }
  };

    const handleAddToCart = (room: any) => {
    addReservationToCart({
      roomId: room.id,
      nome: room.nome,
      qtd_cama_casal: room.qtd_cama_casal,
      qtd_cama_solteiro: room.qtd_cama_solteiro,
      preco: Number(room.preco),
      inicio: checkIn,
      fim: checkOut,
      quantidade: qntGuests
    });
    
  return (
    <AuthContainer>
      <View style={{ display: "flex", justifyContent: "center" }}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          {/* CHECK-IN */}
          <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{ width: width * 0.9 }}>
              <TextField
                label="Check-in"
                icon={{ lib: "FontAwesome6", name: "calendar-days" }}
                placeholder="Selecione a data"
                value={checkIn}
              />
            </View>
          </TouchableOpacity>

          {/* CHECK-OUT */}
          <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{ width: width * 0.9 }}>
              <TextField
                label="check-out"
                icon={{ lib: "FontAwesome6", name: "calendar-days" }}
                placeholder="Selecione a data"
                value={checkOut}
              />
            </View>
          </TouchableOpacity>

          {/* MODAL CALENDÁRIO */}
          <Modal
            transparent
            animationType="fade"
            visible={calendar !== null}
            onRequestClose={closeCalendar}
          >
            <Pressable
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.25)",
              }}
              onPress={closeCalendar}
            >
              <Pressable onPress={() => {}}>
                {calendar === "checkin" && (
                  <RenderDatePicker
                    onSelectDate={(date) => {
                      setCheckIn(date);
                      closeCalendar();
                    }}
                  />
                )}

                {calendar === "checkout" && (
                  <RenderDatePicker
                    onSelectDate={(date) => {
                      setCheckOut(date);
                      closeCalendar();
                    }}
                  />
                )}
              </Pressable>
            </Pressable>
          </Modal>

          {/* HÓSPEDES */}
          <View
            style={{
              marginBottom: height * 0.035, // ✅ espaço antes do RoomCard
            }}
          >
            <Text style={global.label}>Quantidade de hóspedes</Text>

            <InputSpin
              guests={qntGuests}
              onSelectSpin={(guests) => {
                setQntGuests(guests);
              }}
              maxGuests={6}
              minGuests={1}
              step={1}
              colorMax="#DC143C"
              colorMin="#DC143C"
            />

            {/* BOTÃO CONSULTA */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: width * 0.9,
                marginTop: height * 0.02,
                backgroundColor: "#DC143C",
                paddingVertical: 14,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                elevation: 3,
              }}
              disabled={loaging}
              onPress={handleSearch}
            >
              {loaging ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <Text
                  style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}
                >
                  Consulta
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Renderização dos quartos */}
        {avaibleRooms.length > 0 ? (
          <View>
            <Text
              style={[
                global.label,
                { marginTop: height * 0.04, textAlign: "center" },
              ]}
            >
              Opções encontradas
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={width * 0.85}
            >
              {avaibleRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  image={
                    room.fotos?.length > 0
                      ? { uri: room.fotos[0].url }
                      : require("../../assets/imgs/img.jpg")
                  }
                  label={room.nome}
                  // icon={{
                  //   lib: "FontAwesome5",
                  //   name: "bed",
                  // }}
                  description={{
                    title: "Descrição do Quarto",
                    text: `${room.qtd_cama_casal} cama(s) casal \n ${room.qtd_cama_solteiro} cama(s) solteiro
                `,
                    price: Number(room.preco),
                  }}
                  onPressReserve={() => handleAddToCart(room)}
                  onPress={() => {
                  setSelectedRoom(room);
                  setRoomModalVisible(true);
                }}
                />
              ))}
            </ScrollView>
          </View>
        ) : (
          <View>
            {" "}
            <Text
              style={[
                global.label,
                { marginTop: height * 0.04, textAlign: "center" },
              ]}
            >
              {" "}
              Nenhuma opção encontrada
            </Text>
          </View>
        )}
                {avaibleRooms.map((room) => (
            <RoomCard
              key={room.id}
              image={
                room.fotos?.length > 0
                  ? { uri: room.fotos[0].url }
                  : require("../../assets/imgs/img.jpg")
              }
              label={room.nome}
              description={{
                title: "Descrição do Quarto",
                text: `${room.qtd_cama_casal} cama(s) casal \n ${room.qtd_cama_solteiro} cama(s) solteiro`,
                price: Number(room.preco),
              }}
              onPressReserve={() => handleAddToCart(room)}
              onPress={() => {
                setSelectedRoom(room);
                setRoomModalVisible(true);
              }}
            />
          ))}
      </View>
    </AuthContainer>
  );
};
}
export default RenderExplore;

