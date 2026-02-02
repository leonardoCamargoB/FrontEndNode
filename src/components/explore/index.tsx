import AuthContainer from '@/components/ui/AuthContainer';
import RenderDatePicker from '@/components/ui/DatePicker';
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';
import { Dimensions, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import RoomCard from '../ui/RoomCard';
import TextField from '../ui/TextField';
import InputSpin from '../ui/inputSpin';
import { global } from '../ui/styles';

const RenderExplore = () => {
const { width, height } = Dimensions.get('window');
    //useState() para gerenciar e alterar os estados
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [calendar, setCalendar] = useState<"checkin" | "checkout" | null>(null);
    const [qntGuests, setQntGuests] = useState<number>(1);

    const closeCalendar = ()=> setCalendar(null);

    type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

return (
    <AuthContainer>  
    <View style={{display: "flex"/* flexDirection: 'row', gap: width * 0.05*/, justifyContent: "center"}}> 
        <View style={{display:"flex", flexDirection:"column"}}>
        {/*Input do checkin para abrir o calendario*/}
        <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{width: width * 0.9}}>
        <TextField  
            label='Check-in'
            icon={{ lib: "FontAwesome6", name: "calendar-days" }}
            placeholder='Selecione a data'
            value={checkIn}
        />  
    </View>
        </TouchableOpacity>
            </View>
            
        <View style={{display:"flex", flexDirection:"column"}}>
        {/*Input do checkout para abrir o calendario*/}
        <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{width: width * 0.9}}>
        <TextField  
            label='check-out'
            icon={{ lib: "FontAwesome6", name: "calendar-days"}}
            placeholder='Selecione a data'
            value={checkOut}
        />
    </View>
        </TouchableOpacity>
            </View>{""}
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
                backgroundColor: "#rgb(0,0,0, 0.25)",
            }} 
            onPress={closeCalendar} >
                <Pressable onPress={()=>{}}>

                        {calendar === "checkin" && (
                <RenderDatePicker onSelectDate={(date) => {
                setCheckIn(date)
                closeCalendar;
                ;}}/>)}

                        {calendar === "checkout" && (
                <RenderDatePicker onSelectDate={(date) => {
                setCheckOut(date)
                closeCalendar;
                }}
                />
                )}
                </Pressable>
                </Pressable>
            </Modal>

            <View>
            <Text style={global.label}>Quantidade de hóspedes</Text>
            <InputSpin
                    guests={qntGuests}
                    onSelectSpin={(guests)=>{
                    setQntGuests(guests); 
                }}
                maxGuests={6}
                minGuests={1}
                step={1}
                colorMax='#DC143C'
                colorMin='#DC143C'
            />
            </View>

        </View>
        <RoomCard
        image={require("../../assets/imgs/img.jpg")}
        label="Apartamento"
        icon={{
        lib:"FontAwesome5",
        name:"bed" 
        }} 
        description={{
            title:"Descrição do Quarto",
            text:"1 cama de casal \n1 cama de solteiro",
            price: 180.90
        }}

        />
    </AuthContainer>
);
};

export default RenderExplore;