import AuthContainer from "@/components/ui/AuthContainer";
import RenderDatePicker from "@/components/ui/DatePicker";
import { useAuth } from "@/contexts/AuthContext";
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
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

  const closeCalendar = () => setCalendar(null);

  type NameIcon =
    | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

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
              onPress={async () => {
                consulta(checkIn, checkOut, qntGuests);
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Consulta
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CARD QUARTO */}
        <RoomCard
          image={require("../../assets/imgs/img.jpg")}
          label="Apartamento"
          icon={{
            lib: "FontAwesome5",
            name: "bed",
          }}
          description={{
            title: "Descrição do Quarto",
            text: "1 cama de casal \n1 cama de solteiro",
            price: 180.9,
          }}
          onPress={() => setRoomModalVisible(true)}
        />

        {/* MODAL QUARTO */}
        <QuartoModal
          visible={roomModalVisible}
          onClose={() => setRoomModalVisible(false)}
          room={{
            title: "Apartamento",
            description:
              "Apartamento moderno e aconchegante, ideal para casais, famílias pequenas ou viagens a trabalho. O espaço é bem iluminado, ventilado e decorado com estilo contemporâneo, proporcionando conforto e praticidade durante toda a estadia. Local tranquilo, perfeito para descanso, com fácil acesso às principais áreas da cidade..",
            estadia:
              "Estadia mínima de 2 noites. Check-in a partir das 14h. Check-out até às 12h.",
            checkIn: "15/07/2026 - 14:00",
            checkOut: "17/07/2026 - 12:00",
            details: [
              "Wi-Fi gratuito de alta velocidade",
              "Ar-condicionado",
              "Smart TV",
              "Cozinha compacta equipada \n (micro-ondas, fogão e utensílios básicos)",
              "Banheiro privativo com chuveiro quente",
              "Roupa de cama e toalhas inclusas",
              "Espaço limpo e higienizado \n antes de cada estadia",
            ],
            beds: [
              "1 cama de casal confortável",
              "1 cama de solteiro adicional",
            ],
            price: 180.9,
            image: require("../../assets/imgs/img.jpg"),
          }}
        />
      </View>
    </AuthContainer>
  );
};

export default RenderExplore;
